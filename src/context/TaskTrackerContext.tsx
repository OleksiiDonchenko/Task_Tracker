import React, { createContext, useContext, useState } from 'react';
import type { ArrowStatus, EditTask, TabType, TabTypeOfPriority, TabTypeOfSort, Task, TaskTrackerContextType, Theme } from './types';

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

  const getLiClass = (styles: Record<string, string>, tabName: TabType) => {
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

  const getLiClassOfPriority = (style: string, styles: Record<string, string>, tabName: TabTypeOfPriority) => {
    return activeTabOfPriority === tabName
      ? `${style} ${styles._active}`
      : style;
  }

  const handlePriorityChange = (tabName: TabTypeOfPriority) => {
    setActiveTabOfPriority(tabName);
    setSortArrowStatus('closed');
  }

  // Types of sort
  const [activeTabOfSort, setActiveTabOfSort] = useState<TabTypeOfSort>('newest');

  const getLiClassOfSort = (styles: Record<string, string>, tabName: TabTypeOfSort) => {
    return activeTabOfSort === tabName
      ? `${styles.typeOfSort} ${styles._active}`
      : styles.typeOfSort;
  }

  const handleSortChange = (tabName: TabTypeOfSort) => {
    setActiveTabOfSort(tabName);
    setSortArrowStatus('closed');
  }

  // Modification task state
  const [editTask, setEditTask] = useState<EditTask>(null);

  const handleAddNewTask = () => {
    setEditTask('new');
  }

  const handleEditTask = (task: Task, setTaskKey: (n: number) => void) => {
    setEditTask(task);
    setTaskKey(0);
  }

  const handleCloseCreateOrEditTask = () => {
    setEditTask(null);
  }

  // Task states
  const [allTasksCount, setAllTasksCount] = useState(0);
  const [activeTasksCount, setActiveTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [trashTasksCount, setTrashTasksCount] = useState(0);

  return (
    <TaskTrackerContext.Provider value={{
      theme, toggleTheme, activeTab, setActiveTab, getLiClass, handleTabChange, activeTabOfPriority, setActiveTabOfPriority, getLiClassOfPriority, handlePriorityChange, setActiveTabOfSort, getLiClassOfSort, handleSortChange, sortArrowStatus, toggleSortArrow, priorityArrowStatus, setPriorityArrowStatus, togglePriorityArrow, editTask, setEditTask, handleAddNewTask, handleEditTask, handleCloseCreateOrEditTask, allTasksCount, setAllTasksCount, activeTasksCount, setActiveTasksCount, completedTasksCount, setCompletedTasksCount, trashTasksCount, setTrashTasksCount,
    }}>
      {children}
    </ TaskTrackerContext.Provider>
  );
}