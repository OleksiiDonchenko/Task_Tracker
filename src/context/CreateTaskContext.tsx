import { createContext, useContext } from "react";
import type { CreateTaskContextType } from "./types";
import { useCreateTask } from "../hooks/useCreateTask";
import { useTasksContext } from "./TasksContext";

const CreateTaskContext = createContext<CreateTaskContextType | undefined>(undefined);

export const useCreateTaskContext = () => {
  const context = useContext(CreateTaskContext);

  if (!context)
    throw new Error('useCreateTaskContext must be used within CreateTaskProvider');

  return context;
}

export const CreateTaskProvider = ({ children }: { children: React.ReactNode }) => {
  const { setTasks } = useTasksContext();

  const { newTask, setNewTask, handleSubmit, convertStringToTaskDate, handleDiscardNewTask } = useCreateTask(setTasks);

  return (
    <CreateTaskContext.Provider value={{ newTask, setNewTask, handleSubmit, convertStringToTaskDate, handleDiscardNewTask, }}>
      {children}
    </CreateTaskContext.Provider>
  )
}