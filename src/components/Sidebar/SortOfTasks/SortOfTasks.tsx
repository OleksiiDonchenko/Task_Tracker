import { useState } from 'react';
import styles from './SortOfTasks.module.css';

type TabType = 'newest' | 'oldest' | 'priority';

const SortOfTasks = () => {
  const [activeTab, setActiveTab] = useState('newest');

  const getLiClass = (style: string, tabName: TabType) => {
    return activeTab === tabName
      ? `${style} ${styles._active}`
      : style;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.sortBy}>Sort by</h3>
      <ul className={styles.typesOfSort}>
        <li className={getLiClass(styles.typeOfSort, 'newest')} onClick={() => setActiveTab('newest')}>Newest</li>
        <li className={getLiClass(styles.typeOfSort, 'oldest')} onClick={() => setActiveTab('oldest')}>Oldest</li>
        <li className={getLiClass(styles.typeOfSort, 'priority')} onClick={() => setActiveTab('priority')}>Priority</li>
      </ul>
    </div>
  );
};

export default SortOfTasks;