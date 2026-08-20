import { useState } from "react";
import type { Date, Task } from "../context/types";

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const today = new Date();
const yyyy = today.getFullYear();
const mm = MONTHS[today.getMonth()];
const dd = today.getDate();

const initialStateDate: Task = {
  completed: false,
  title: '',
  description: '',
  priority: 'High',
  date: {
    month: mm,
    day: dd,
    year: yyyy,
  },
  favorites: false,
  key: Math.random(),
}

export const useCreateTask = (setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
  const [newTask, setNewTask] = useState<Task>(initialStateDate);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTasks(prev => [...prev, newTask]);

    setNewTask(prev => ({ ...initialStateDate, date: prev.date }));
  };

  const convertStringToTaskDate = (dateString: string): Date => {
    const [yearStr, monthStr, dayStr] = dateString.split('-');

    const year = parseInt(yearStr, 10);
    const monthIndex = parseInt(monthStr, 10) - 1;
    const day = parseInt(dayStr, 10);

    return {
      month: MONTHS[monthIndex],
      day: day,
      year: year,
    };
  };

  const handleDiscardNewTask = () => {
    setNewTask(initialStateDate);
  }

  return { newTask, setNewTask, handleSubmit, convertStringToTaskDate, handleDiscardNewTask };
};