import React, { createContext, useContext, useState } from 'react';
import type { ArrowStatus, TabType, TabTypeOfPriority, TabTypeOfSort, Task, TaskTrackerContextType, Theme } from './types';
import { testArrTasks } from '../dataTest/dataTest';

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

  // Tabs of tasks
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getLiClass = (styles: any, tabName: TabType) => {
    setArrowStatus('closed');
    return activeTab === tabName
      ? `${styles.typeOfTasks} ${styles._active}`
      : styles.typeOfTasks;
  };

  // Priority of tasks
  const [activeTabOfPriority, setActiveTabOfPriority] = useState<TabTypeOfPriority>('all');

  const getLiClassOfPriority = (style: string, styles: any, tabName: TabTypeOfPriority) => {
    return activeTabOfPriority === tabName
      ? `${style} ${styles._active}`
      : style;
  }

  // Types of sort
  const [activeTabOfSort, setActiveTabOfSort] = useState('newest');

  const getLiClassOfSort = (styles: any, tabName: TabTypeOfSort) => {
    setArrowStatus('closed');
    return activeTabOfSort === tabName
      ? `${styles.typeOfSort} ${styles._active}`
      : styles.typeOfSort;
  }

  // Tasks
  const [tasks, setTasks] = useState<Task[]>(testArrTasks);

  return (
    <TaskTrackerContext.Provider value={{
      theme, toggleTheme, setActiveTab, getLiClass, setActiveTabOfPriority, getLiClassOfPriority, setActiveTabOfSort, getLiClassOfSort, arrowStatus, toggleArrow, tasks, setTasks,
    }}>
      {children}
    </ TaskTrackerContext.Provider>
  );
}