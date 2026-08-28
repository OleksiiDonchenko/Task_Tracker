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

export const useCreateOrEditTask = (setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
  const [newTask, setNewTask] = useState<Task>(initialStateDate);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTasks(prev => [...prev, newTask]);

    setNewTask(prev => ({ ...initialStateDate, date: prev.date, key: Math.random() }));
  };

  const handleEditTaskSubmit = (e: React.SubmitEvent<HTMLFormElement>, editTask: Task) => {
    e.preventDefault();

    setTasks(prev => prev.map(task => task.key === editTask.key ? editTask : task));
  }

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

  const convertTaskDateToString = (date: Date | undefined): string => {
    if (!date)
      return '';

    const yyyy = date.year;
    const mm = String(MONTHS.findIndex(mm => mm === date.month) + 1).padStart(2, '0');
    const dd = String(date.day).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
  }

  const handleDiscardNewTask = () => {
    setNewTask({
      ...initialStateDate, priority: 'High', date: {
        month: mm,
        day: dd,
        year: yyyy,
      }
    });
  }

  return { newTask, setNewTask, handleSubmit, handleEditTaskSubmit, convertStringToTaskDate, convertTaskDateToString, handleDiscardNewTask };
};