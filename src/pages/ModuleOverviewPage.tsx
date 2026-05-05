import { OverviewPage, TextBody } from '@teamleader/ahoy';
import { useParams } from 'react-router-dom';

import { findModule } from '../navigation/modules';

const ModuleOverviewPage = () => {
  const { module: moduleId, tab } = useParams();
  const moduleDefinition = findModule(moduleId);
  const tabLabel = tab ?? 'overview';
  const tabTitle = tabLabel.charAt(0).toUpperCase() + tabLabel.slice(1);
  const title = moduleDefinition ? `${moduleDefinition.label} — ${tabTitle}` : tabTitle;

  return (
    <OverviewPage>
      <OverviewPage.Header title={title} />
      <OverviewPage.Body>
        <TextBody>This is the {tabLabel} page for the {moduleDefinition?.label ?? moduleId} module.</TextBody>
      </OverviewPage.Body>
    </OverviewPage>
  );
};

export default ModuleOverviewPage;
