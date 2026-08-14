import { } from 'react';
import styles from './DropDownSort.module.css';
import { useTaskTrackerContext } from '../../../../../../context/TaskTrackerContext';

type DropDownSortProps = {
  arrowStatus: 'closed' | 'open';
}

const DropDownSort = ({arrowStatus}: DropDownSortProps) => {
  const { setActiveTabOfSort, getLiClassOfSort } = useTaskTrackerContext();

  return (
    <ul className={styles.typesOfSort} data-arrow={arrowStatus}>
      <li className={getLiClassOfSort(styles, 'newest')} onClick={() => setActiveTabOfSort('newest')}>Newest</li>
      <li className={getLiClassOfSort(styles, 'oldest')} onClick={() => setActiveTabOfSort('oldest')}>Oldest</li>
      <li className={getLiClassOfSort(styles, 'priority')} onClick={() => setActiveTabOfSort('priority')}>Priority</li>
    </ul>
  );
};

export default DropDownSort;