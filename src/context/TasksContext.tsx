import { createContext, useContext } from "react";
import type { TasksContextType } from "./types";
import { useTasks } from "../hooks/useTasks";
import { useTaskTrackerContext } from "./TaskTrackerContext";

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context)
    throw new Error('useTasksContext must be used within TasksProvider');

  return context;
}

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const { activeTab } = useTaskTrackerContext();
  const { tasks, setTasks, search, setSearch,  displayedTasks } = useTasks(activeTab);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, search, setSearch, displayedTasks }}>
      {children}
    </TasksContext.Provider>
  )
}