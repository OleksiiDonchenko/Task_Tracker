import { } from 'react';
import styles from './TypesOfTasks.module.css';
import { ActiveTasksIcon, AllTasksIcon, CompletedTasksIcon, TrashTasksIcon } from '../../../assets/icons/components';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';

const TypesOfTasks = () => {

  const { setActiveTab, getLiClass } = useTaskTrackerContext();

  return (
    <ul className={styles.typesOfTasks}>
      <li className={getLiClass(styles, 'all')} onClick={() => setActiveTab('all')}>
        <div className={styles.iconAndText}>
          <AllTasksIcon />
          All tasks
        </div>
        <div className={styles.numberOfTasks}>
          {12}
        </div>
      </li>
      <li className={getLiClass(styles, 'active')} onClick={() => setActiveTab('active')}>
        <div className={styles.iconAndText}>
          <ActiveTasksIcon />
          Active
        </div>
        <div className={styles.numberOfTasks}>
          {8}
        </div>
      </li>
      <li className={getLiClass(styles, 'completed')} onClick={() => setActiveTab('completed')}>
        <div className={styles.iconAndText}>
          <CompletedTasksIcon />
          Completed
        </div>
        <div className={styles.numberOfTasks}>
          {4}
        </div>
      </li>
      <li className={getLiClass(styles, 'trash')} onClick={() => setActiveTab('trash')}>
        <div className={styles.iconAndText}>
          <TrashTasksIcon />
          Trash
        </div>
        <div className={styles.numberOfTasks}>
          {2}
        </div>
      </li>
    </ul>
  );
};

export default TypesOfTasks;