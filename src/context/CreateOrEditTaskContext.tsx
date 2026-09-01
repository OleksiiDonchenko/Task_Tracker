import { createContext, useContext } from "react";
import type { CreateOrEditTaskContextType } from "./types";
import { useCreateOrEditTask } from "../hooks/useCreateOrEditTask";
import { useTasksContext } from "./TasksContext";

const CreateOrEditTaskContext = createContext<CreateOrEditTaskContextType | undefined>(undefined);

export const useCreateOrEditTaskContext = () => {
  const context = useContext(CreateOrEditTaskContext);

  if (!context)
    throw new Error('useCreateOrEditTaskContext must be used within CreateOrEditTaskProvider');

  return context;
}

export const CreateOrEditTaskProvider = ({ children }: { children: React.ReactNode }) => {
  const { setTasks } = useTasksContext();

  const { newTask, setNewTask, handleSubmit, handleEditTaskSubmit, handleDeleteTask, convertStringToTaskDate, convertTaskDateToString, handleDiscardNewTask, handleCompletedTask, handleFavoriteTask } = useCreateOrEditTask(setTasks);

  return (
    <CreateOrEditTaskContext.Provider value={{ newTask, setNewTask, handleSubmit, handleEditTaskSubmit, handleDeleteTask, convertStringToTaskDate, handleDiscardNewTask, convertTaskDateToString, handleCompletedTask, handleFavoriteTask }}>
      {children}
    </CreateOrEditTaskContext.Provider>
  )
}