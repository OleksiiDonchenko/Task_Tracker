import { } from 'react';
import styles from './TaskSortAndFilter.module.css';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Divider from '../../../Divider/Divider';

const TaskSortAndFilter = () => {
  return (
    <div className={styles.taskSortAndFilter}>
      <div className={styles.wrapper}>
        <Filter />
        <Sort />
      </div>
      <Divider />
    </div>
  );
};

export default TaskSortAndFilter;