import { useState } from 'react';
import styles from './UserProfile.module.css';
import blankUserProfilePhoto from '../../../assets/blank-profile.png';
import { ArrowDownIcon, ArrowUpIcon } from '../../../assets/icons/components';

type ArrowStatus = 'closed' | 'open';

const UserProfile = () => {
  const blankUser = {
    photo: blankUserProfilePhoto,
    name: 'First',
    surname: 'Second',
  };

  let user = blankUser;

  const [arrowStatus, setArrowStatus] = useState<ArrowStatus>('closed');

  const toggleArrow = () => {
    setArrowStatus(prev => prev === 'closed' ? 'open' : 'closed');
  }

  return (
    <div className={styles.userProfile}>
      <img src={user.photo} alt='user picture' className={styles.userPhoto} />
      <div className={styles.name}>{`${user.name} ${user.surname}`}</div>
      <div
        className={styles.arrow}
        onClick={toggleArrow}
        data-arrow={arrowStatus}
        role='button'
        tabIndex={0}>
        <div className={styles.arrowWrapper}>
          <ArrowDownIcon />
        </div>
        <div className={styles.arrowWrapper}>
          <ArrowUpIcon />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;