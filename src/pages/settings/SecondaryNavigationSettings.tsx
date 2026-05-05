import { TabGroup, TitleTab } from '@teamleader/ahoy';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { findTertiaryItem } from './tertiaryItems';

const SecondaryNavigationSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { section } = useParams();
  const sectionId = findTertiaryItem(section)?.id ?? 'general';

  const isOverview = location.pathname.endsWith('/overview');
  const isDetail = location.pathname.endsWith('/detail');

  return (
    <TabGroup>
      <TitleTab active={isOverview} onClick={() => navigate(`/settings/${sectionId}/overview`)}>
        Overview
      </TitleTab>
      <TitleTab active={isDetail} onClick={() => navigate(`/settings/${sectionId}/detail`)}>
        Detail
      </TitleTab>
    </TabGroup>
  );
};

export default SecondaryNavigationSettings;
