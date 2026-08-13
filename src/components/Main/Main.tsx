import { } from 'react';
import styles from './Main.module.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import { useTaskTrackerContext } from '../../context/TaskTrackerContext';

const Main = () => {
  const { theme } = useTaskTrackerContext();

  return (
    <main className={styles.main} data-theme={theme}>
      <div className={styles.container}>
        <Header />
        <MainContent />
      </div>
    </main >
  );
};

export default Main;