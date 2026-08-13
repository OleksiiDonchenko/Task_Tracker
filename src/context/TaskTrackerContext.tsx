import React, { createContext, useContext, useState } from 'react';
import type { TaskTrackerContextType, Theme } from './types';

const TaskTrackerContext = createContext<TaskTrackerContextType | undefined>(undefined);

export const useTaskTrackerContext = () => {
  const context = useContext(TaskTrackerContext);

  if (!context)
    throw new Error('useTaskTrackerContext must be used within TaskTrackerProvider');

  return context;
};

export const TaskTrackerProvider = ({ children }: { children: React.ReactNode }) => {
  // Theme color
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <TaskTrackerContext.Provider value={{
      theme, toggleTheme,
    }}>
      {children}
    </ TaskTrackerContext.Provider>
  );
}