import { } from 'react';
import styles from './TaskSortAndFilter.module.css';
import TaskTabs from './TaskTabs/TaskTabs';
import Sort from './Sort/Sort';
import Divider from '../../../Divider/Divider';

const TaskSortAndFilter = () => {
  return (
    <div className={styles.taskSortAndFilter}>
      <div className={styles.wrapper}>
        <TaskTabs />
        <Sort />
      </div>
      <Divider />
    </div>
  );
};

export default TaskSortAndFilter;