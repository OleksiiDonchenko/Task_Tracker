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
  // Sort arrow status
  const [sortArrowStatus, setSortArrowStatus] = useState<ArrowStatus>('closed');

  const toggleSortArrow = () => {
    setSortArrowStatus(prev => prev === 'closed' ? 'open' : 'closed');
  }

  // Priority arrow status
  const [priorityArrowStatus, setPriorityArrowStatus] = useState<ArrowStatus>('closed');

  const togglePriorityArrow = () => {
    setPriorityArrowStatus(prev => prev === 'closed' ? 'open' : 'closed');
  }

  // Theme color
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setSortArrowStatus('closed');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Tabs of tasks
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getLiClass = (styles: any, tabName: TabType) => {
    return activeTab === tabName
      ? `${styles.typeOfTasks} ${styles._active}`
      : styles.typeOfTasks;
  };

  const handleTabChange = (tabName: TabType) => {
    setActiveTab(tabName);
    setSortArrowStatus('closed');
  }

  // Priority of tasks
  const [activeTabOfPriority, setActiveTabOfPriority] = useState<TabTypeOfPriority>('all');

  const getLiClassOfPriority = (style: string, styles: any, tabName: TabTypeOfPriority) => {
    return activeTabOfPriority === tabName
      ? `${style} ${styles._active}`
      : style;
  }

  const handlePriorityChange = (tabName: TabTypeOfPriority) => {
    setActiveTabOfPriority(tabName);
    setSortArrowStatus('closed');
  }

  // Types of sort
  const [activeTabOfSort, setActiveTabOfSort] = useState('newest');

  const getLiClassOfSort = (styles: any, tabName: TabTypeOfSort) => {
    return activeTabOfSort === tabName
      ? `${styles.typeOfSort} ${styles._active}`
      : styles.typeOfSort;
  }

  const handleSortChange = (tabName: TabTypeOfSort) => {
    setActiveTabOfSort(tabName);
    setSortArrowStatus('closed');
  }

  // Tasks
  const [tasks, setTasks] = useState<Task[]>(testArrTasks);

  return (
    <TaskTrackerContext.Provider value={{
      theme, toggleTheme, setActiveTab, getLiClass, handleTabChange, setActiveTabOfPriority, getLiClassOfPriority, handlePriorityChange, setActiveTabOfSort, getLiClassOfSort, handleSortChange, sortArrowStatus, toggleSortArrow, tasks, setTasks, priorityArrowStatus, setPriorityArrowStatus, togglePriorityArrow,
    }}>
      {children}
    </ TaskTrackerContext.Provider>
  );
}