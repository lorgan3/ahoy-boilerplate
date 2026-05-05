import { Outlet } from 'react-router-dom';

import SecondaryNavigation from '../navigation/SecondaryNavigation';
import Topbar from './Topbar';
import s from './shell.module.css';

const ModuleLayout = () => {
  return (
    <>
      <Topbar>
        <SecondaryNavigation />
      </Topbar>
      <div className={s.contentInner}>
        <Outlet />
      </div>
    </>
  );
};

export default ModuleLayout;
