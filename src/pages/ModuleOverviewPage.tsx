import { OverviewPage, TextBody } from '@teamleader/ahoy';
import { useParams } from 'react-router-dom';

import { findModule } from '../navigation/modules';

const ModuleOverviewPage = () => {
  const { module: moduleId } = useParams();
  const moduleDefinition = findModule(moduleId);
  const title = moduleDefinition ? `${moduleDefinition.label} — Overview` : 'Overview';

  return (
    <OverviewPage>
      <OverviewPage.Header title={title} />
      <OverviewPage.Body>
        <TextBody>This is the overview page for the {moduleDefinition?.label ?? moduleId} module.</TextBody>
      </OverviewPage.Body>
    </OverviewPage>
  );
};

export default ModuleOverviewPage;
