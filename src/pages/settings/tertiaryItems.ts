export interface TertiaryItem {
  id: string;
  label: string;
}

export const TERTIARY_ITEMS: TertiaryItem[] = [
  { id: 'general', label: 'General' },
  { id: 'users', label: 'Users' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'billing', label: 'Billing' },
];

export const findTertiaryItem = (id: string | undefined): TertiaryItem | undefined =>
  TERTIARY_ITEMS.find((item) => item.id === id);
