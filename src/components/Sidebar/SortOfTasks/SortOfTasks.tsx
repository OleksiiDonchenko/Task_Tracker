import { } from 'react';
import styles from './SortOfTasks.module.css';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';

const SortOfTasks = () => {
  const { getLiClassOfSort, handleSortChange } = useTaskTrackerContext();

  return (
    <div className={styles.container}>
      <h3 className={styles.sortBy}>Sort by</h3>
      <ul className={styles.typesOfSort}>
        <li className={getLiClassOfSort(styles, 'newest')} onClick={() => handleSortChange('newest')}>Newest</li>
        <li className={getLiClassOfSort(styles, 'oldest')} onClick={() => handleSortChange('oldest')}>Oldest</li>
        <li className={getLiClassOfSort(styles, 'priority')} onClick={() => handleSortChange('priority')}>Priority</li>
      </ul>
    </div>
  );
};

export default SortOfTasks;