import type { TabType, TabTypeOfPriority, TabTypeOfSort } from "../context/types";

export const STORAGE_KEYS = {
  THEME: 'tasktracker_theme',
  ACTIVE_TAB: 'tasktracker_active_tab',
  ACTIVE_TAB_PRIORITY: 'tasktracker_active_tab_priority',
  ACTIVE_TAB_SORT: 'tasktracker_active_tab_sort',
}

export const VALID_TABS: TabType[] = ['all', 'active', 'completed', 'favorites', 'trash'];
export const VALID_TABS_PRIORITY: TabTypeOfPriority[] = ['all', 'high', 'medium', 'low'];
export const VALID_TABS_SORT: TabTypeOfSort[] = ['newest', 'oldest', 'priority'];