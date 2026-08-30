import { createContext, useContext } from "react";
import type { TasksContextType } from "./types";
import { useTasks } from "../hooks/useTasks";

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context)
    throw new Error('useTasksContext must be used within TasksProvider');

  return context;
}

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const { tasks, setTasks, search, setSearch, filtredTasks } = useTasks();

  return (
    <TasksContext.Provider value={{ tasks, setTasks, search, setSearch, filtredTasks }}>
      {children}
    </TasksContext.Provider>
  )
}