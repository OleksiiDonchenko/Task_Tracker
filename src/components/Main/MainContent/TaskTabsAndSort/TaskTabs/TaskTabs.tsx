import { } from 'react';
import styles from './TaskTabs.module.css';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';

const TaskTabs = () => {
  const { getLiClass, handleTabChange } = useTaskTrackerContext();

  return (
    <ul className={styles.typesOfFilters}>
      <li className={getLiClass(styles, 'all')} onClick={() => handleTabChange('all')}>All</li>
      <li className={getLiClass(styles, 'active')} onClick={() => handleTabChange('active')}>Active</li>
      <li className={getLiClass(styles, 'completed')} onClick={() => handleTabChange('completed')}>Completed</li>
    </ul>
  );
};

export default TaskTabs;