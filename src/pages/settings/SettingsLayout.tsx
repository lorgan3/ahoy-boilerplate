import { Outlet } from 'react-router-dom';

import SecondaryNavigationSettings from './SecondaryNavigationSettings';
import TertiaryNavigation from '../../navigation/TertiaryNavigation';
import shell from '../../shell/shell.module.css';

const SettingsLayout = () => {
  return (
    <>
      <SecondaryNavigationSettings />
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
