export interface TaskTrackerContextType {
  theme: Theme;
  toggleTheme: () => void;
  activeTab: TabType;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
  getLiClass: (styles: Record<string, string>, tabName: TabType) => string;
  handleTabChange: (tabName: TabType) => void;
  activeTabOfPriority: TabTypeOfPriority;
  setActiveTabOfPriority: React.Dispatch<React.SetStateAction<TabTypeOfPriority>>;
  getLiClassOfPriority: (style: string, styles: Record<string, string>, tabName: TabTypeOfPriority) => string;
  handlePriorityChange: (tabName: TabTypeOfPriority) => void;
  setActiveTabOfSort: React.Dispatch<React.SetStateAction<TabTypeOfSort>>;
  getLiClassOfSort: (styles: Record<string, string>, tabName: TabTypeOfSort) => string;
  activeTabOfSort: TabTypeOfSort;
  handleSortChange: (tabName: TabTypeOfSort) => void;
  sortArrowStatus: ArrowStatus;
  setSortArrowStatus: React.Dispatch<React.SetStateAction<ArrowStatus>>;
  toggleSortArrow: () => void;
  priorityArrowStatus: ArrowStatus;
  setPriorityArrowStatus: React.Dispatch<React.SetStateAction<ArrowStatus>>;
  togglePriorityArrow: () => void;
  filterPriorityArrowStatus: ArrowStatus;
  toggleFilterPriorityArrow: () => void;
  editTask: EditTask;
  setEditTask: React.Dispatch<React.SetStateAction<EditTask>>;
  handleAddNewTask: () => void;
  handleEditTask: (task: Task, setTaskKey: (n: number) => void) => void;
  handleCloseCreateOrEditTask: () => void;
  allTasksCount: number;
  setAllTasksCount: React.Dispatch<React.SetStateAction<number>>;
  activeTasksCount: number;
  setActiveTasksCount: React.Dispatch<React.SetStateAction<number>>;
  completedTasksCount: number;
  setCompletedTasksCount: React.Dispatch<React.SetStateAction<number>>;
  favoritesTasksCount: number;
  setFavoritesTasksCount: React.Dispatch<React.SetStateAction<number>>;
  trashTasksCount: number;
  setTrashTasksCount: React.Dispatch<React.SetStateAction<number>>;
}

export type Theme = 'light' | 'dark';
export type TabType = 'all' | 'active' | 'completed' | 'favorites' | 'trash';
export type TabTypeOfPriority = 'all' | 'high' | 'medium' | 'low';
export type TabTypeOfSort = 'newest' | 'oldest' | 'priority';
export type ArrowStatus = 'closed' | 'open';
export type Task = {
  completed: boolean;
  deleted: boolean;
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
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  displayedTasks: Task[];
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
  handleFavoriteTask: (task: Task) => void;
}