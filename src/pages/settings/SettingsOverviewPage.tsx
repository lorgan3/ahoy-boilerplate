import { OverviewPage, TextBody } from '@teamleader/ahoy';
import { useParams } from 'react-router-dom';

import { findTertiaryItem } from './tertiaryItems';

const SettingsOverviewPage = () => {
  const { section } = useParams();
  const item = findTertiaryItem(section);
  const title = item ? `Settings — ${item.label} — Overview` : 'Settings — Overview';

  return (
    <OverviewPage>
      <OverviewPage.Header title={title} />
      <OverviewPage.Body>
        <TextBody>Overview for the {item?.label ?? section} settings section.</TextBody>
      </OverviewPage.Body>
    </OverviewPage>
  );
};

export default SettingsOverviewPage;
