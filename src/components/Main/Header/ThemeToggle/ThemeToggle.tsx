import { } from 'react';
import styles from './ThemeToggle.module.css';
import { MoonIcon, SunIcon } from '../../../../assets/icons/components';
import { useTaskTrackerContext } from '../../../../context/TaskTrackerContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTaskTrackerContext();

  return (
    <div className={styles.themeToggle}
      onClick={toggleTheme}
      data-theme={theme}
      role="button"
      tabIndex={0}>
      <div className={styles.iconWrapper}>
        <SunIcon />
      </div>
      <div className={styles.iconWrapper}>
        <MoonIcon />
      </div>
    </div >
  );
};

export default ThemeToggle;