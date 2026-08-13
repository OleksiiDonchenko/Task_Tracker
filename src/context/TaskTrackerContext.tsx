import React, { createContext, useContext, useState } from 'react';
import type { ArrowStatus, TabType, TabTypeOfSort, TaskTrackerContextType, Theme } from './types';

const TaskTrackerContext = createContext<TaskTrackerContextType | undefined>(undefined);

export const useTaskTrackerContext = () => {
  const context = useContext(TaskTrackerContext);

  if (!context)
    throw new Error('useTaskTrackerContext must be used within TaskTrackerProvider');

  return context;
};

export const TaskTrackerProvider = ({ children }: { children: React.ReactNode }) => {
  // Arrow status
  const [arrowStatus, setArrowStatus] = useState<ArrowStatus>('closed');

  const toggleArrow = () => {
    setArrowStatus(prev => prev === 'closed' ? 'open' : 'closed');
  }

  // Theme color
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setArrowStatus('closed');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Types of tasks
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getLiClass = (styles: any, tabName: TabType) => {
    setArrowStatus('closed');
    return activeTab === tabName
      ? `${styles.typeOfTasks} ${styles._active}`
      : styles.typeOfTasks;
  };

  // Types of sort
  const [activeTabOfSort, setActiveTabOfSort] = useState('newest');

  const getLiClassOfSort = (styles: any, tabName: TabTypeOfSort) => {
    setArrowStatus('closed');
    return activeTabOfSort === tabName
      ? `${styles.typeOfSort} ${styles._active}`
      : styles.typeOfSort;
  }

  return (
    <TaskTrackerContext.Provider value={{
      theme, toggleTheme, setActiveTab, getLiClass, setActiveTabOfSort, getLiClassOfSort, arrowStatus, toggleArrow
    }}>
      {children}
    </ TaskTrackerContext.Provider>
  );
}