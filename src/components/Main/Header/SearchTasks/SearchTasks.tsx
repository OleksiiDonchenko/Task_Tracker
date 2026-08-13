import { useState } from 'react';
import styles from './SearchTasks.module.css';
import { SearchIcon } from '../../../../assets/icons/components';
import { useTaskTrackerContext } from '../../../../context/TaskTrackerContext';

const SearchTasks = () => {
  const [search, setSearch] = useState('');
  const { theme } = useTaskTrackerContext();

  return (
    <div className={styles.searchWrapper}>
      <SearchIcon />
      <input
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