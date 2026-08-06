import { } from 'react';
import styles from './Title.module.css';
import icon from '../../../assets/icon.svg';

const Title = () => {
  return (
    <div className={styles.title}>
      <img src={icon} alt="Icon" className={styles.icon} />
      <h2>TaskTracker</h2>
    </div>
  );
};

export default Title;