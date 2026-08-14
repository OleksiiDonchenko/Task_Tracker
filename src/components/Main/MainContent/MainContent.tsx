import { } from 'react';
import styles from './MainContent.module.css';
import TaskTabsAndSort from './TaskTabsAndSort/TaskTabsAndSort';
import Tasks from './Tasks/Tasks';
import CreateOrEditTask from './CreateOrEditTask/CreateOrEditTask';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <TaskTabsAndSort />
      <Tasks />
      <CreateOrEditTask />
    </div>
  );
};

export default MainContent;