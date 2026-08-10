import { } from 'react';
import styles from './MainBoard.module.css';
import SearchTasks from './SearchTasks/SearchTasks';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import Notifications from './Notifications/Notifications';
import UserProfile from './UserProfile/UserProfile';

const MainBoard = () => {
  return (
    <main className={styles.mainboard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <SearchTasks />
          <ThemeToggle />
          <Notifications />
          <UserProfile />
        </div>
        <div className={styles.mainContent}>

        </div>
      </div>
    </main >
  );
};

export default MainBoard;