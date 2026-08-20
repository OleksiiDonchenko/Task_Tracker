import { } from 'react';
import styles from './MainContent.module.css';
import TaskTabsAndSort from './TaskTabsAndSort/TaskTabsAndSort';
import Tasks from './Tasks/Tasks';
import CreateOrEditTask from './CreateOrEditTask/CreateOrEditTask';
import { TasksProvider } from '../../../context/TasksContext';
import { CreateTaskProvider } from '../../../context/CreateTaskContext';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <TaskTabsAndSort />
      <TasksProvider>
        <CreateTaskProvider>
          <Tasks />
          <CreateOrEditTask />
        </CreateTaskProvider>
      </TasksProvider>
    </div>
  );
};

export default MainContent;