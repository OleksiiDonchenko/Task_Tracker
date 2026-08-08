import { } from 'react';
import styles from './Title.module.css';
import { TaskTrackerIcon } from '../../../assets/icons/components';

const Title = () => {
  return (
    <div className={styles.title}>
      <TaskTrackerIcon />
      <h2>TaskTracker</h2>
    </div>
  );
};

export default Title;