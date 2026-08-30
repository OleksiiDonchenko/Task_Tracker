import { } from 'react';
import styles from './Main.module.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import { useTaskTrackerContext } from '../../context/TaskTrackerContext';
import { TasksProvider } from '../../context/TasksContext';

const Main = () => {
  const { theme } = useTaskTrackerContext();

  return (
    <main className={styles.main} data-theme={theme}>
      <div className={styles.container}>
        <TasksProvider>
          <Header />
          <MainContent />
        </TasksProvider>
      </div>
    </main >
  );
};

export default Main;