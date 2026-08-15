export interface TaskTrackerContextType {
  theme: Theme;
  toggleTheme: () => void;
  setActiveTab: (p: TabType) => void;
  getLiClass: (s: any, tabName: TabType) => string;
  setActiveTabOfPriority: (p: TabTypeOfPriority) => void;
  getLiClassOfPriority: (style: string, styles: any, tabName: TabTypeOfPriority) => string;
  setActiveTabOfSort: (p: TabTypeOfSort) => void;
  getLiClassOfSort: (s: any, tabName: TabTypeOfSort) => string;
  arrowStatus: ArrowStatus;
  toggleArrow: () => void;
  tasks: Task[];
  setTasks: (p: Task[]) => void;
}

export type Theme = 'light' | 'dark';
export type TabType = 'all' | 'active' | 'completed' | 'trash';
export type TabTypeOfPriority = 'all' | 'high' | 'medium' | 'low';
export type TabTypeOfSort = 'newest' | 'oldest' | 'priority';
export type ArrowStatus = 'closed' | 'open';
export type Task = {
  completed: boolean;
  header: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  date: Date;
  favorites: boolean;
  key: number;
}
type Date = {
  month: string;
  day: number;
  year: number;
}