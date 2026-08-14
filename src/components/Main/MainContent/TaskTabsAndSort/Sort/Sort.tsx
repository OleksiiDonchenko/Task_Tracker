import { } from 'react';
import styles from './Sort.module.css';
import Arrow from '../../../../Arrow/Arrow';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';
import DropDownSort from './DropDownSort/DropDownSort';

const Sort = () => {
  const { getLiClassOfSort, arrowStatus, toggleArrow } = useTaskTrackerContext();

  return (
    <div className={styles.sort}>
      <div>Sort by:</div>
      <ul className={styles.typesOfSort}>
        <li className={getLiClassOfSort(styles, 'newest')}>Newest</li>
        <li className={getLiClassOfSort(styles, 'oldest')}>Oldest</li>
        <li className={getLiClassOfSort(styles, 'priority')}>Priority</li>
      </ul>
      <DropDownSort arrowStatus={arrowStatus} />
      <Arrow status={arrowStatus} toggleArrow={toggleArrow} />
    </div>
  );
};

export default Sort;