import { Outlet } from 'react-router-dom';

import SecondaryNavigation from '../navigation/SecondaryNavigation';
import s from './shell.module.css';

const ModuleLayout = () => {
  return (
    <>
      <SecondaryNavigation />
      <div className={s.contentInner}>
        <Outlet />
      </div>
    </>
  );
};

export default ModuleLayout;
