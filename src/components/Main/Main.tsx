import { } from 'react';
import styles from './MainBoard.module.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <MainContent />
      </div>
    </main >
  );
};

export default Main;