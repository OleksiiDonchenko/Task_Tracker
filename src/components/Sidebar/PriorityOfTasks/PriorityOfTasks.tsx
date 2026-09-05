import { } from 'react';
import styles from './PriorityOfTasks.module.css';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';
import Arrow from '../../Arrow/Arrow';

const PriorityOfTasks = () => {
  const { getLiClassOfPriority, handlePriorityChange, filterPriorityArrowStatus, toggleFilterPriorityArrow } = useTaskTrackerContext();

  return (
    <div className={styles.container}>
      <h3 className={styles.filters}>Filters</h3>
      <div className={styles.priorityContainer}>
        <h4 className={styles.priority}>Priority</h4>
        <Arrow status={filterPriorityArrowStatus} toggleArrow={toggleFilterPriorityArrow} />
      </div>
      <ul className={styles.priorities} data-arrow={filterPriorityArrowStatus}>
        <li className={getLiClassOfPriority(styles.all, styles, 'all')} onClick={() => handlePriorityChange('all')}>All</li>
        <li className={getLiClassOfPriority(styles.high, styles, 'high')} onClick={() => handlePriorityChange('high')}>High</li>
        <li className={getLiClassOfPriority(styles.medium, styles, 'medium')} onClick={() => handlePriorityChange('medium')}>Medium</li>
        <li className={getLiClassOfPriority(styles.low, styles, 'low')} onClick={() => handlePriorityChange('low')}>Low</li>
      </ul>
    </div>
  );
};

export default PriorityOfTasks;