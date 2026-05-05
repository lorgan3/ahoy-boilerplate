import { DetailPage, TextBody } from '@teamleader/ahoy';
import { useParams } from 'react-router-dom';

import { findModule } from '../navigation/modules';

const ModuleDetailPage = () => {
  const { module: moduleId } = useParams();
  const moduleDefinition = findModule(moduleId);
  const title = moduleDefinition ? `${moduleDefinition.label} — Detail` : 'Detail';

  return (
    <DetailPage>
      <DetailPage.Header title={title} />
      <DetailPage.Body>
        <TextBody>This is the detail page for the {moduleDefinition?.label ?? moduleId} module.</TextBody>
      </DetailPage.Body>
    </DetailPage>
  );
};

export default ModuleDetailPage;
