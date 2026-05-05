import { Outlet } from 'react-router-dom';

import PrimaryNavigation from '../navigation/PrimaryNavigation';
import s from './shell.module.css';

const AppShell = () => {
  return (
    <div className={s.shell}>
      <PrimaryNavigation />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppShell;
