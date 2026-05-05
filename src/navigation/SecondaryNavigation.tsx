import { TabGroup, TitleTab } from '@teamleader/ahoy';
import { useLocation, useNavigate } from 'react-router-dom';

import type { TabDefinition } from './modules';

interface Props {
  tabs: TabDefinition[];
  basePath: string;
}

const SecondaryNavigation = ({ tabs, basePath }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <TabGroup>
      {tabs.map((tab) => (
        <TitleTab
          key={tab.id}
          active={location.pathname.endsWith(`/${tab.id}`)}
          onClick={() => navigate(`${basePath}/${tab.id}`)}
        >
          {tab.label}
        </TitleTab>
      ))}
    </TabGroup>
  );
};

export default SecondaryNavigation;
