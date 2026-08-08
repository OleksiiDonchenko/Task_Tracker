import { } from 'react';
import styles from './AddTaskButton.module.css';
import { PlusIcon } from '../../../assets/icons/components/PlusIcon';

const AddTaskButton = () => {
  return (
    <button className={styles.btn}>
      <PlusIcon />
      Add Task
    </button>
  );
};

export default AddTaskButton;