import { } from 'react';
import styles from './Footer.module.css';
import { useTaskTrackerContext } from '../../context/TaskTrackerContext';

const Footer = () => {
  const { theme } = useTaskTrackerContext();

  return (
    <footer className={styles.footer} data-theme={theme}>
    </footer>
  );
};

export default Footer;