import { } from 'react';
import styles from './SortOfTasks.module.css';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';

const SortOfTasks = () => {
  const { setActiveTabOfSort, getLiClassOfSort } = useTaskTrackerContext();

  return (
    <div className={styles.container}>
      <h3 className={styles.sortBy}>Sort by</h3>
      <ul className={styles.typesOfSort}>
        <li className={getLiClassOfSort(styles, 'newest')} onClick={() => setActiveTabOfSort('newest')}>Newest</li>
        <li className={getLiClassOfSort(styles, 'oldest')} onClick={() => setActiveTabOfSort('oldest')}>Oldest</li>
        <li className={getLiClassOfSort(styles, 'priority')} onClick={() => setActiveTabOfSort('priority')}>Priority</li>
      </ul>
    </div>
  );
};

export default SortOfTasks;