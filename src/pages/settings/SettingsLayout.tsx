import { Outlet } from 'react-router-dom';

import SecondaryNavigationSettings from './SecondaryNavigationSettings';
import TertiaryNavigation from '../../navigation/TertiaryNavigation';
import Topbar from '../../shell/Topbar';
import shell from '../../shell/shell.module.css';

const SettingsLayout = () => {
  return (
    <>
      <Topbar>
        <SecondaryNavigationSettings />
      </Topbar>
      <div className={shell.contentBelow}>
        <TertiaryNavigation />
        <div className={shell.contentInner}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
