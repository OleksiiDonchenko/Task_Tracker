import { useState } from 'react';
import styles from './SearchTasks.module.css';
import { SearchIcon } from '../../../../assets/icons/components';

const SearchTasks = () => {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.searchWrapper}>
      <SearchIcon />
      <input
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