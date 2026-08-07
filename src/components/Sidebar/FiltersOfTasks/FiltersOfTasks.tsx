import { useState } from 'react';
import styles from './FiltersOfTasks.module.css';

type TabType = 'all' | 'high' | 'medium' | 'low';

const FiltersOfTasks = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getLiClass = (style: string, tabName: TabType) => {
    return activeTab === tabName
      ? `${style} ${styles._active}`
      : style;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.filters}>Filters</h3>
      <h4 className={styles.priority}>Priority</h4>
      <ul className={styles.priorities}>
        <li className={getLiClass(styles.all, 'all')} onClick={() => setActiveTab('all')}>All</li>
        <li className={getLiClass(styles.high, 'high')} onClick={() => setActiveTab('high')}>High</li>
        <li className={getLiClass(styles.medium, 'medium')} onClick={() => setActiveTab('medium')}>Medium</li>
        <li className={getLiClass(styles.low, 'low')} onClick={() => setActiveTab('low')}>Low</li>
      </ul>
    </div>
  );
};

export default FiltersOfTasks;