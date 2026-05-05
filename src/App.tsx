import { Navigate, Route, Routes } from 'react-router-dom';

import AppShell from './shell/AppShell';
import ModuleLayout from './shell/ModuleLayout';
import ModuleOverviewPage from './pages/ModuleOverviewPage';
import ModuleDetailPage from './pages/ModuleDetailPage';
import SettingsLayout from './pages/settings/SettingsLayout';
import SettingsOverviewPage from './pages/settings/SettingsOverviewPage';
import SettingsDetailPage from './pages/settings/SettingsDetailPage';

const App = () => {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/dashboard/overview" replace />} />

        <Route path="settings" element={<SettingsLayout />}>
          <Route index element={<Navigate to="general/overview" replace />} />
          <Route path=":section/overview" element={<SettingsOverviewPage />} />
          <Route path=":section/detail" element={<SettingsDetailPage />} />
          <Route path=":section/:tab" element={<SettingsOverviewPage />} />
        </Route>

        <Route path=":module" element={<ModuleLayout />}>
          <Route path="overview" element={<ModuleOverviewPage />} />
          <Route path="detail" element={<ModuleDetailPage />} />
          <Route path=":tab" element={<ModuleOverviewPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard/overview" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
