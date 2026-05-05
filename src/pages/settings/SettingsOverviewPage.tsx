import { OverviewPage, TextBody } from '@teamleader/ahoy';
import { useParams } from 'react-router-dom';

import { findTertiaryItem } from './tertiaryItems';

const SettingsOverviewPage = () => {
  const { section, tab } = useParams();
  const item = findTertiaryItem(section);
  const tabLabel = tab ?? 'overview';
  const tabTitle = tabLabel.charAt(0).toUpperCase() + tabLabel.slice(1);
  const title = item
    ? `Settings — ${item.label} — ${tabTitle}`
    : `Settings — ${tabTitle}`;

  return (
    <OverviewPage>
      <OverviewPage.Header title={title} />
      <OverviewPage.Body>
        <TextBody>{tabTitle} for the {item?.label ?? section} settings section.</TextBody>
      </OverviewPage.Body>
    </OverviewPage>
  );
};

export default SettingsOverviewPage;
