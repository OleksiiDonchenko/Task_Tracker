import { } from 'react';
import styles from './Sort.module.css';
import Arrow from '../../../../Arrow/Arrow';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';
import DropDownSort from './DropDownSort/DropDownSort';

const Sort = () => {
  const { getLiClassOfSort, sortArrowStatus, toggleSortArrow } = useTaskTrackerContext();

  return (
    <div className={styles.sort}>
      <div>Sort by:</div>
      <ul className={styles.typesOfSort}>
        <li className={getLiClassOfSort(styles, 'newest')}>Newest</li>
        <li className={getLiClassOfSort(styles, 'oldest')}>Oldest</li>
        <li className={getLiClassOfSort(styles, 'priority')}>Priority</li>
      </ul>
      <DropDownSort arrowStatus={sortArrowStatus} />
      <Arrow status={sortArrowStatus} toggleArrow={toggleSortArrow} />
    </div>
  );
};

export default Sort;