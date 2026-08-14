import { } from 'react';
import styles from './TaskTabs.module.css';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';

const TaskTabs = () => {
  const { setActiveTab, getLiClass } = useTaskTrackerContext();

  return (
    <ul className={styles.typesOfFilters}>
      <li className={getLiClass(styles, 'all')} onClick={() => setActiveTab('all')}>All</li>
      <li className={getLiClass(styles, 'active')} onClick={() => setActiveTab('active')}>Active</li>
      <li className={getLiClass(styles, 'completed')} onClick={() => setActiveTab('completed')}>Completed</li>
    </ul>
  );
};

export default TaskTabs;