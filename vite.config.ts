import { readFileSync } from 'node:fs';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const BROKEN_IMPORT_RE =
  /^\s*import\s*{\s*AggregationFns\s*}\s*from\s*['"]@tanstack\/react-table['"];?\s*$/m;

// Apply postcss-modules to one CSS file from inside @teamleader/ahoy.
// Returns a JS module that injects scoped CSS into <head> and exports
// the original-class → scoped-class mapping as default.
const buildAhoyCssModule = async (filePath: string) => {
  const source = readFileSync(filePath, 'utf8');
  let mapping: Record<string, string> = {};
  const result = await postcss([
    postcssModules({
      generateScopedName: '[name]_[local]__[hash:base64:5]',
      getJSON: (_, json) => {
        mapping = json;
      },
    }),
  ]).process(source, { from: filePath });

  const cssLiteral = JSON.stringify(result.css);
  const mappingLiteral = JSON.stringify(mapping);
  const tagLiteral = JSON.stringify(filePath);

  return `
const css = ${cssLiteral};
const tag = ${tagLiteral};
if (typeof document !== 'undefined') {
  if (!document.querySelector('style[data-ahoy="' + CSS.escape(tag) + '"]')) {
    const style = document.createElement('style');
    style.setAttribute('data-ahoy', tag);
    style.textContent = css;
    document.head.appendChild(style);
  }
}
export default ${mappingLiteral};
`;
};

const stripAhoyBrokenTypeImport = (): Plugin => ({
  name: 'strip-ahoy-broken-type-import',
  enforce: 'pre',
  load(id) {
    if (id.includes('@teamleader/ahoy') && id.endsWith('/components/datagrid/types.js')) {
      return readFileSync(id, 'utf8').replace(BROKEN_IMPORT_RE, '');
    }
    return null;
  },
});

// Ahoy ships unhashed CSS (`.box`, `.cell`, …) and its JS imports it as a
// CSS-Module default export — i.e. it expects the consumer's build pipeline
// to do CSS-Modules scoping. Vite only treats `.module.css` as modules, so we
// run postcss-modules ourselves for any CSS imported from inside
// `@teamleader/ahoy`. We resolve those imports to a virtual id so Vite's CSS
// plugin doesn't try to also parse our JS output as CSS.
// Virtual id format: `\0ahoy-css:<absolute-path>.js` — ending in `.js` so
// Vite's built-in CSS pipeline doesn't try to handle it.
const VIRTUAL_PREFIX = '\0ahoy-css:';
const VIRTUAL_SUFFIX = '.js';
const ahoyCssModules = (): Plugin => ({
  name: 'ahoy-css-modules',
  enforce: 'pre',
  async resolveId(source, importer) {
    if (!source.endsWith('.css')) return null;
    const sourceIsAhoy = source.includes('/@teamleader/ahoy/');
    const importerIsAhoy = !!importer && importer.includes('/@teamleader/ahoy/');
    if (!sourceIsAhoy && !importerIsAhoy) return null;
    const resolved = await this.resolve(source, importer, { skipSelf: true });
    return resolved ? VIRTUAL_PREFIX + resolved.id + VIRTUAL_SUFFIX : null;
  },
  load(id) {
    if (!id.startsWith(VIRTUAL_PREFIX) || !id.endsWith(VIRTUAL_SUFFIX)) return null;
    const filePath = id.slice(VIRTUAL_PREFIX.length, -VIRTUAL_SUFFIX.length);
    return buildAhoyCssModule(filePath);
  },
});

export default defineConfig({
  plugins: [stripAhoyBrokenTypeImport(), ahoyCssModules(), react()],
  // ahoy bundles draft-js, which references the Node global `global`.
  define: { global: 'globalThis' },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'ahoy-fixups-esbuild',
          setup(build) {
            build.onLoad(
              { filter: /@teamleader\/ahoy\/.*\/datagrid\/types\.js$/ },
              (args) => ({
                contents: readFileSync(args.path, 'utf8').replace(BROKEN_IMPORT_RE, ''),
                loader: 'js',
              }),
            );
            build.onLoad({ filter: /@teamleader\/ahoy\/.*\.css$/ }, async (args) => ({
              contents: await buildAhoyCssModule(args.path),
              loader: 'js',
            }));
          },
        },
      ],
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
