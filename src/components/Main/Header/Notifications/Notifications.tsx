import { useState } from 'react';
import styles from './Notifications.module.css';
import { BellIcon } from '../../../../assets/icons/components';

const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications((prev) => prev ? false : true);
  }

  return (
    <div
      className={styles.notifications}
      onClick={toggleNotifications}
      data-notifications={showNotifications}
      role='button'
      tabIndex={0}>
      <BellIcon />
    </div>
  );
};

export default Notifications;