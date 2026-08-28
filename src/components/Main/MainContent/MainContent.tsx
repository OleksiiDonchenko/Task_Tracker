import { } from 'react';
import styles from './MainContent.module.css';
import TaskTabsAndSort from './TaskTabsAndSort/TaskTabsAndSort';
import Tasks from './Tasks/Tasks';
import CreateOrEditTask from './CreateOrEditTask/CreateOrEditTask';
import { TasksProvider } from '../../../context/TasksContext';
import { CreateOrEditTaskProvider } from '../../../context/CreateOrEditTaskContext';

const MainContent = () => {
  const createOrEditTaskID = styles.createOrEditTask;

  return (
    <div className={styles.mainContent}>
      <TaskTabsAndSort />
      <TasksProvider>
        <CreateOrEditTaskProvider>
          <Tasks />
          <CreateOrEditTask createOrEditTaskID={createOrEditTaskID} />
        </CreateOrEditTaskProvider>
      </TasksProvider>
    </div>
  );
};

export default MainContent;