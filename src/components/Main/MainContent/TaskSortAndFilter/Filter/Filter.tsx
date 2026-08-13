import { } from 'react';
import styles from './Filter.module.css';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';

const Filter = () => {
  const { setActiveTab, getLiClass } = useTaskTrackerContext();

  return (
    <div className={styles.filters}>
      <ul className={styles.typesOfFilters}>
        <li className={getLiClass(styles, 'all')} onClick={() => setActiveTab('all')}>All</li>
        <li className={getLiClass(styles, 'active')} onClick={() => setActiveTab('active')}>Active</li>
        <li className={getLiClass(styles, 'completed')} onClick={() => setActiveTab('completed')}>Completed</li>
      </ul>
    </div>
  );
};

export default Filter;