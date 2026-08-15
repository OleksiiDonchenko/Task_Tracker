import { } from 'react';
import styles from './DropDownSort.module.css';
import { useTaskTrackerContext } from '../../../../../../context/TaskTrackerContext';

type DropDownSortProps = {
  arrowStatus: 'closed' | 'open';
}

const DropDownSort = ({ arrowStatus }: DropDownSortProps) => {
  const { theme, getLiClassOfSort, handleSortChange } = useTaskTrackerContext();

  return (
    <ul className={styles.typesOfSort} data-theme={theme} data-arrow={arrowStatus}>
      <li className={getLiClassOfSort(styles, 'newest')} onClick={() => handleSortChange('newest')}>Newest</li>
      <li className={getLiClassOfSort(styles, 'oldest')} onClick={() => handleSortChange('oldest')}>Oldest</li>
      <li className={getLiClassOfSort(styles, 'priority')} onClick={() => handleSortChange('priority')}>Priority</li>
    </ul>
  );
};

export default DropDownSort;