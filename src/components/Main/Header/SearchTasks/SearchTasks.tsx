import { useRef } from 'react';
import styles from './SearchTasks.module.css';
import { SearchIcon } from '../../../../assets/icons/components';
import { useTaskTrackerContext } from '../../../../context/TaskTrackerContext';
import { useTasksContext } from '../../../../context/TasksContext';

const SearchTasks = () => {
  const { theme } = useTaskTrackerContext();
  const { search, setSearch } = useTasksContext();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchInputClick = () => {
    if (searchInputRef.current) {
      try {
        searchInputRef.current.showPicker();
      } catch (error) {
        searchInputRef.current.focus();
      }
    }
  }

  return (
    <div className={styles.searchWrapper} onClick={handleSearchInputClick}>
      <div onClick={handleSearchInputClick}>
        <SearchIcon />
      </div>
      <input
        ref={searchInputRef}
        data-theme={theme}
        autoComplete='off'
        type='text'
        name='search'
        className={styles.search}
        placeholder='Search tasks...'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default SearchTasks;