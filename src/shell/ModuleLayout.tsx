import { Outlet, useParams } from 'react-router-dom';

import SecondaryNavigation from '../navigation/SecondaryNavigation';
import { DEFAULT_TABS, findModule } from '../navigation/modules';
import Topbar from './Topbar';
import s from './shell.module.css';

const ModuleLayout = () => {
  const { module: moduleId } = useParams();
  const mod = findModule(moduleId);
  const tabs = mod?.tabs ?? DEFAULT_TABS;

  return (
    <>
      <Topbar>
        <SecondaryNavigation tabs={tabs} basePath={`/${moduleId}`} />
      </Topbar>
      <div className={s.contentInner}>
        <Outlet />
      </div>
    </>
  );
};

export default ModuleLayout;
