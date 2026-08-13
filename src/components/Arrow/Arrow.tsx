import { } from 'react';
import styles from './Arrow.module.css';
import { ArrowDownIcon, ArrowUpIcon } from '../../assets/icons/components';

type ArrowProps = {
  status: 'closed' | 'open';
  toggleArrow: () => void;
}

const Arrow = ({status, toggleArrow}: ArrowProps) => {

  return (
    <div
      className={styles.arrow}
      onClick={toggleArrow}
      data-arrow={status}
      role='button'
      tabIndex={0}>
      <div className={styles.arrowWrapper}>
        <ArrowDownIcon />
      </div>
      <div className={styles.arrowWrapper}>
        <ArrowUpIcon />
      </div>
    </div>
  );
};

export default Arrow;