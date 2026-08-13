export interface TaskTrackerContextType {
  theme: Theme;
  toggleTheme: () => void;
  setActiveTab: (p: TabType) => void;
  getLiClass: (s: any, tabName: TabType) => string;
  setActiveTabOfSort: (p: TabTypeOfSort) => void;
  getLiClassOfSort: (s: any, tabName: TabTypeOfSort) => string;
  arrowStatus: ArrowStatus;
  toggleArrow: () => void;
}

export type Theme = 'light' | 'dark';
export type TabType = 'all' | 'active' | 'completed' | 'trash';
export type TabTypeOfSort = 'newest' | 'oldest' | 'priority';
export type ArrowStatus = 'closed' | 'open';
