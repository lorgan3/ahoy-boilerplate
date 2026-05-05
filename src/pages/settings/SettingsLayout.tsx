import { Outlet, useParams } from 'react-router-dom';

import SecondaryNavigation from '../../navigation/SecondaryNavigation';
import TertiaryNavigation from '../../navigation/TertiaryNavigation';
import Topbar from '../../shell/Topbar';
import { DEFAULT_TABS } from '../../navigation/modules';
import { findTertiaryItem } from './tertiaryItems';
import shell from '../../shell/shell.module.css';

const SettingsLayout = () => {
  const { section } = useParams();
  const item = findTertiaryItem(section);
  const tabs = item?.tabs ?? DEFAULT_TABS;

  return (
    <>
      <Topbar>
        <SecondaryNavigation tabs={tabs} basePath={`/settings/${section ?? 'general'}`} />
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
