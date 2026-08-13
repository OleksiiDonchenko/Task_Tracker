export interface TaskTrackerContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type Theme = 'light' | 'dark';
