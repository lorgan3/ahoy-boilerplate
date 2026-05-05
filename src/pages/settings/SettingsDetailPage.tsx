import { DetailPage, TextBody } from '@teamleader/ahoy';
import { useParams } from 'react-router-dom';

import { findTertiaryItem } from './tertiaryItems';

const SettingsDetailPage = () => {
  const { section } = useParams();
  const item = findTertiaryItem(section);
  const title = item ? `Settings — ${item.label} — Detail` : 'Settings — Detail';

  return (
    <DetailPage>
      <DetailPage.Header title={title} />
      <DetailPage.Body>
        <TextBody>Detail for the {item?.label ?? section} settings section.</TextBody>
      </DetailPage.Body>
    </DetailPage>
  );
};

export default SettingsDetailPage;
