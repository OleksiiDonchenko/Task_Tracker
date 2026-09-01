import { useEffect, useRef } from 'react';
import styles from './Sort.module.css';
import Arrow from '../../../../Arrow/Arrow';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';
import type { TabTypeOfSort } from '../../../../../context/types';

const Sort = () => {
  const { theme, getLiClassOfSort, sortArrowStatus, setSortArrowStatus, toggleSortArrow, activeTabOfSort, handleSortChange } = useTaskTrackerContext();

  const options: TabTypeOfSort[] = ['newest', 'oldest', 'priority'];
  const dropDownSortOptionsRef = useRef<HTMLDivElement>(null);
  const capitalize = ([first, ...rest]: string) => first ? first.toUpperCase() + rest.join('') : '';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownSortOptionsRef.current && !dropDownSortOptionsRef.current.contains(e.target as Node)) {
        setSortArrowStatus('closed');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div className={styles.sort} data-theme={theme}>
      <div className={styles.sortBy}>Sort by:</div>
      <div ref={dropDownSortOptionsRef} className={styles.sortSelectContainer} data-arrow={sortArrowStatus}>
        <button
          type='button'
          className={styles.selectTrigger}
          onClick={toggleSortArrow}>
          <span>{capitalize(activeTabOfSort)}</span>
          <Arrow status={sortArrowStatus} />
        </button>
        <ul className={styles.selectOptionsList}>
          {options.map((option) => (
            <li key={option}
              className={getLiClassOfSort(styles, option)}
              onClick={() => handleSortChange(option)}>
              {capitalize(option)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;