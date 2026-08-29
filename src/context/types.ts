export interface TaskTrackerContextType {
  theme: Theme;
  toggleTheme: () => void;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
  getLiClass: (styles: Record<string, string>, tabName: TabType) => string;
  handleTabChange: (tabName: TabType) => void;
  setActiveTabOfPriority: React.Dispatch<React.SetStateAction<TabTypeOfPriority>>;
  getLiClassOfPriority: (style: string, styles: Record<string, string>, tabName: TabTypeOfPriority) => string;
  handlePriorityChange: (tabName: TabTypeOfPriority) => void;
  setActiveTabOfSort: React.Dispatch<React.SetStateAction<TabTypeOfSort>>;
  getLiClassOfSort: (styles: Record<string, string>, tabName: TabTypeOfSort) => string;
  handleSortChange: (tabName: TabTypeOfSort) => void;
  sortArrowStatus: ArrowStatus;
  toggleSortArrow: () => void;
  priorityArrowStatus: ArrowStatus;
  setPriorityArrowStatus: React.Dispatch<React.SetStateAction<ArrowStatus>>;
  togglePriorityArrow: () => void;
  editTask: EditTask;
  setEditTask: React.Dispatch<React.SetStateAction<EditTask>>;
  handleAddNewTask: () => void;
  handleEditTask: (task: Task, setTaskKey: (n: number) => void) => void;
  handleCloseCreateOrEditTask: () => void;
}

export type Theme = 'light' | 'dark';
export type TabType = 'all' | 'active' | 'completed' | 'trash';
export type TabTypeOfPriority = 'all' | 'high' | 'medium' | 'low';
export type TabTypeOfSort = 'newest' | 'oldest' | 'priority';
export type ArrowStatus = 'closed' | 'open';
export type Task = {
  completed: boolean;
  title: string;
  description: string;
  priority: Priority;
  date: Date;
  favorites: boolean;
  key: number;
}
export type Priority = 'High' | 'Medium' | 'Low' | undefined;
export type Date = {
  month: string;
  day: number;
  year: number;
};
export type EditTask = Task | 'new' | null;

export interface TasksContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface CreateOrEditTaskContextType {
  newTask: Task;
  setNewTask: React.Dispatch<React.SetStateAction<Task>>;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  handleEditTaskSubmit: (e: React.SubmitEvent<HTMLFormElement>, editTask: Task) => void;
  handleDeleteTask: (key: number) => void;
  convertStringToTaskDate: (dateString: string) => Date;
  convertTaskDateToString: (date: Date | undefined) => string;
  handleDiscardNewTask: () => void;
  handleCompletedTask: (task: Task) => void;
}