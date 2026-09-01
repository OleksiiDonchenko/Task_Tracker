import { } from 'react';
import styles from './TypesOfTasks.module.css';
import { ActiveTasksIcon, AllTasksIcon, CompletedTasksIcon, StarIcon, TrashTasksIcon } from '../../../assets/icons/components';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';

const TypesOfTasks = () => {
  const { getLiClass, handleTabChange, allTasksCount, activeTasksCount, completedTasksCount, favoritesTasksCount, trashTasksCount } = useTaskTrackerContext();

  return (
    <ul className={styles.typesOfTasks}>
      <li className={getLiClass(styles, 'all')} onClick={() => handleTabChange('all')}>
        <div className={styles.iconAndText}>
          <AllTasksIcon />
          All tasks
        </div>
        <div className={styles.numberOfTasks}>
          {allTasksCount}
        </div>
      </li>
      <li className={getLiClass(styles, 'active')} onClick={() => handleTabChange('active')}>
        <div className={styles.iconAndText}>
          <ActiveTasksIcon />
          Active
        </div>
        <div className={styles.numberOfTasks}>
          {activeTasksCount}
        </div>
      </li>
      <li className={getLiClass(styles, 'completed')} onClick={() => handleTabChange('completed')}>
        <div className={styles.iconAndText}>
          <CompletedTasksIcon />
          Completed
        </div>
        <div className={styles.numberOfTasks}>
          {completedTasksCount}
        </div>
      </li>
      <li className={getLiClass(styles, 'favorites')} onClick={() => handleTabChange('favorites')}>
        <div className={styles.iconAndText}>
          <StarIcon />
          Favorites
        </div>
        <div className={styles.numberOfTasks}>
          {favoritesTasksCount}
        </div>
      </li>
      <li className={getLiClass(styles, 'trash')} onClick={() => handleTabChange('trash')}>
        <div className={styles.iconAndText}>
          <TrashTasksIcon />
          Trash
        </div>
        <div className={styles.numberOfTasks}>
          {trashTasksCount}
        </div>
      </li>
    </ul>
  );
};

export default TypesOfTasks;