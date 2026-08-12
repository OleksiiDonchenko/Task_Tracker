import { } from 'react';
import styles from './MainContent.module.css';
import TaskSortAndFilter from './TaskSortAndFilter/TaskSortAndFilter';
import Tasks from './Tasks/Tasks';
import CreateOrEditTask from './CreateOrEditTask/CreateOrEditTask';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <TaskSortAndFilter />
      <Tasks />
      <CreateOrEditTask />
    </div>
  );
};

export default MainContent;