import { } from 'react';
import styles from './Notifications.module.css';
import { BellIcon } from '../../../assets/icons/components';

const Notifications = () => {
  return (
    <div className={styles.notifications} role='button' tabIndex={0}>
      <BellIcon />
    </div>
  );
};

export default Notifications;