import { } from 'react';
import styles from './AddTaskButton.module.css';
import plus from '../../../assets/plus.svg';

const AddTaskButton = () => {
  return (
    <button className={styles.btn}>
      <img src={plus} alt="Plus" className={styles.plus} />
      Add Task
    </button>
  );
};

export default AddTaskButton;