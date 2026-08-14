import { } from 'react';
import styles from './PriorityOfTasks.module.css';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';

const PriorityOfTasks = () => {
  const {setActiveTabOfPriority, getLiClassOfPriority} = useTaskTrackerContext();

  return (
    <div className={styles.container}>
      <h3 className={styles.filters}>Filters</h3>
      <h4 className={styles.priority}>Priority</h4>
      <ul className={styles.priorities}>
        <li className={getLiClassOfPriority(styles.all, styles, 'all')} onClick={() => setActiveTabOfPriority('all')}>All</li>
        <li className={getLiClassOfPriority(styles.high, styles, 'high')} onClick={() => setActiveTabOfPriority('high')}>High</li>
        <li className={getLiClassOfPriority(styles.medium, styles, 'medium')} onClick={() => setActiveTabOfPriority('medium')}>Medium</li>
        <li className={getLiClassOfPriority(styles.low, styles, 'low')} onClick={() => setActiveTabOfPriority('low')}>Low</li>
      </ul>
    </div>
  );
};

export default PriorityOfTasks;