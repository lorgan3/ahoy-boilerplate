import { TabGroup, TitleTab } from '@teamleader/ahoy';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { findModule } from './modules';

const SecondaryNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { module: moduleId } = useParams();
  const moduleDefinition = findModule(moduleId);

  if (!moduleDefinition) {
    return null;
  }

  const isOverview = location.pathname.endsWith('/overview');
  const isDetail = location.pathname.endsWith('/detail');

  return (
    <TabGroup>
      <TitleTab
        active={isOverview}
        onClick={() => navigate(`/${moduleDefinition.id}/overview`)}
      >
        Overview
      </TitleTab>
      <TitleTab
        active={isDetail}
        onClick={() => navigate(`/${moduleDefinition.id}/detail`)}
      >
        Detail
      </TitleTab>
    </TabGroup>
  );
};

export default SecondaryNavigation;
