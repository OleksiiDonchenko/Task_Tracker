import { useState } from 'react';
import styles from './ThemeToggle.module.css';
import { MoonIcon, SunIcon } from '../../../assets/icons/components';

type Theme = 'light' | 'dark';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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