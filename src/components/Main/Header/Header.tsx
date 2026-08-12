import { } from 'react';
import styles from './Header.module.css';
import SearchTasks from './SearchTasks/SearchTasks';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import Notifications from './Notifications/Notifications';
import UserProfile from './UserProfile/UserProfile';

const Header = () => {
  return (
    <div className={styles.header}>
      <SearchTasks />
      <ThemeToggle />
      <Notifications />
      <UserProfile />
    </div>
  );
};

export default Header;