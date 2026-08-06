import { useState } from 'react';
import styles from './TypesOfTasks.module.css';
import { ActiveTasksIcon, AllTasksIcon, CompletedTasksIcon, TrashTasksIcon } from '../../../assets/icons';

type TabType = 'all' | 'active' | 'completed' | 'trash';

const TypesOfTasks = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getLiClass = (tabName: TabType) => {
    return activeTab === tabName
      ? `${styles.typeOfTasks} ${styles._active}`
      : styles.typeOfTasks;
  };

  return (
    <ul className={styles.typesOfTasks}>
      <li className={getLiClass('all')} onClick={() => setActiveTab('all')}>
        <div className={styles.iconAndText}>
          <AllTasksIcon />
          All tasks
        </div>
        <div className={styles.numberOfTasks}>
          {12}
        </div>
      </li>
      <li className={getLiClass('active')} onClick={() => setActiveTab('active')}>
        <div className={styles.iconAndText}>
          <ActiveTasksIcon />
          Active
        </div>
        <div className={styles.numberOfTasks}>
          {8}
        </div>
      </li>
      <li className={getLiClass('completed')} onClick={() => setActiveTab('completed')}>
        <div className={styles.iconAndText}>
          <CompletedTasksIcon />
          Completed
        </div>
        <div className={styles.numberOfTasks}>
          {4}
        </div>
      </li>
      <li className={getLiClass('trash')} onClick={() => setActiveTab('trash')}>
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