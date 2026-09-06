import type { TabType } from "../context/types";

export const STORAGE_KEYS = {
  THEME: 'tasktracker_theme',
  ACTIVE_TAB: 'tasktracker_active_tab',
}

export const VALID_TABS: TabType[] = ['all', 'active', 'completed', 'favorites', 'trash'];