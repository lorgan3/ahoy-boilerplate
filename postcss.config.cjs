// PostCSS configuration mirroring the plugins required as peer dependencies of
// @teamleader/ahoy, so .css files imported from ahoy (and your own files using
// the same primitives) are processed identically to the design system itself.
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-pseudoelements': {},
    'postcss-each': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-reporter': {},
    'postcss-preset-env': {
      preserve: false,
      features: {
        'custom-properties': false,
      },
    },
  },
};
