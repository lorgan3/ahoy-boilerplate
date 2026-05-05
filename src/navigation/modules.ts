import {
  IconBuildingMediumFilled,
  IconBuildingMediumOutline,
  IconCalendarMediumFilled,
  IconCalendarMediumOutline,
  IconCheckmarkBadgedMediumFilled,
  IconCheckmarkBadgedMediumOutline,
  IconContactsMediumFilled,
  IconContactsMediumOutline,
  IconDocumentMediumFilled,
  IconDocumentMediumOutline,
  IconExpensesMediumFilled,
  IconExpensesMediumOutline,
  IconHeadsetMediumFilled,
  IconHeadsetMediumOutline,
  IconKanbanMediumFilled,
  IconKanbanMediumOutline,
  IconMoneyMediumFilled,
  IconMoneyMediumOutline,
  IconProductsMediumFilled,
  IconProductsMediumOutline,
  IconProjectsMediumFilled,
  IconProjectsMediumOutline,
  IconSettingsMediumFilled,
  IconSettingsMediumOutline,
  IconStatsMediumFilled,
  IconStatsMediumOutline,
  IconTimerMediumFilled,
  IconTimerMediumOutline,
  IconWorkorderMediumFilled,
  IconWorkorderMediumOutline,
} from '@teamleader/ahoy';
import type { ComponentType } from 'react';

export interface ModuleDefinition {
  id: string;
  label: string;
  icon: ComponentType;
  iconActive: ComponentType;
}

// Dashboard is reachable via the logo at the top of the primary nav, so it is
// NOT rendered as a module button. It is still a known module —
// `findModule('dashboard')` returns this definition so secondary nav, page
// titles, etc. resolve correctly on `/dashboard/*` routes.
export const DASHBOARD_MODULE: ModuleDefinition = {
  id: 'dashboard',
  label: 'Dashboard',
  icon: IconStatsMediumOutline,
  iconActive: IconStatsMediumFilled,
};

export const MODULES: ModuleDefinition[] = [
  { id: 'calendar', label: 'Calendar', icon: IconCalendarMediumOutline, iconActive: IconCalendarMediumFilled },
  { id: 'contacts', label: 'Contacts', icon: IconContactsMediumOutline, iconActive: IconContactsMediumFilled },
  { id: 'companies', label: 'Companies', icon: IconBuildingMediumOutline, iconActive: IconBuildingMediumFilled },
  {
    id: 'deals',
    label: 'Deals',
    icon: IconCheckmarkBadgedMediumOutline,
    iconActive: IconCheckmarkBadgedMediumFilled,
  },
  { id: 'quotations', label: 'Quotations', icon: IconDocumentMediumOutline, iconActive: IconDocumentMediumFilled },
  { id: 'projects', label: 'Projects', icon: IconProjectsMediumOutline, iconActive: IconProjectsMediumFilled },
  { id: 'planning', label: 'Planning', icon: IconKanbanMediumOutline, iconActive: IconKanbanMediumFilled },
  { id: 'invoices', label: 'Revenue', icon: IconMoneyMediumOutline, iconActive: IconMoneyMediumFilled },
  { id: 'expenses', label: 'Expenses', icon: IconExpensesMediumOutline, iconActive: IconExpensesMediumFilled },
  { id: 'workorders', label: 'Work orders', icon: IconWorkorderMediumOutline, iconActive: IconWorkorderMediumFilled },
  { id: 'tickets', label: 'Tickets', icon: IconHeadsetMediumOutline, iconActive: IconHeadsetMediumFilled },
  { id: 'products', label: 'Products', icon: IconProductsMediumOutline, iconActive: IconProductsMediumFilled },
  { id: 'timesheets', label: 'Timesheets', icon: IconTimerMediumOutline, iconActive: IconTimerMediumFilled },
  { id: 'insights', label: 'Insights', icon: IconStatsMediumOutline, iconActive: IconStatsMediumFilled },
  { id: 'settings', label: 'Settings', icon: IconSettingsMediumOutline, iconActive: IconSettingsMediumFilled },
];

export const findModule = (id: string | undefined): ModuleDefinition | undefined => {
  if (id === DASHBOARD_MODULE.id) return DASHBOARD_MODULE;
  return MODULES.find((module) => module.id === id);
};
