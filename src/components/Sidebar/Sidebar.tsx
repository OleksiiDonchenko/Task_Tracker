import { useState } from 'react';
import styles from './Sidebar.module.css';
import icon from '../../assets/icon.svg';
import plus from '../../assets/plus.svg';
import allTasks from '../../assets/all_tasks.svg';
import activeTasks from '../../assets/active_tasks.svg';
import completedTasks from '../../assets/completed_tasks.svg';
import trashTasks from '../../assets/trash_tasks.svg';

type TabType = 'all' | 'active' | 'completed' | 'trash';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getLiClass = (tabName: TabType) => {
    return activeTab === tabName
      ? `${styles.typeOfTasks} ${styles._active}`
      : styles.typeOfTasks;
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>
        <img src={icon} alt="Icon" className={styles.icon} />
        <h2>TaskTracker</h2>
      </div>
      <button className={styles.btn}>
        <img src={plus} alt="Plus" className={styles.plus} />
        Add Task
      </button>
      <ul>
        <li className={getLiClass('all')} onClick={() => setActiveTab('all')}>
          <img src={allTasks} alt="All tasks" className={styles.allTasks} />
          All tasks
        </li>
        <li className={getLiClass('active')} onClick={() => setActiveTab('active')}>
          <img src={activeTasks} alt="Active tasks" className={styles.activeTasks} />
          Active
        </li>
        <li className={getLiClass('completed')} onClick={() => setActiveTab('completed')}>
          <img src={completedTasks} alt="Completed tasks" className={styles.completedTasks} />
          Completed
        </li>
        <li className={getLiClass('trash')} onClick={() => setActiveTab('trash')}>
          <img src={trashTasks} alt="Trash tasks" className={styles.trashTasks} />
          Trash
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;