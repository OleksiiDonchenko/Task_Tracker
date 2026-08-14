import { } from 'react';
import styles from './TaskTabsAndSort.module.css';
import TaskTabs from './TaskTabs/TaskTabs';
import Sort from './Sort/Sort';
import Divider from '../../../Divider/Divider';

const TaskTabsAndSort = () => {
  return (
    <div className={styles.taskTabsAndSort}>
      <div className={styles.wrapper}>
        <TaskTabs />
        <Sort />
      </div>
      <Divider />
    </div>
  );
};

export default TaskTabsAndSort;