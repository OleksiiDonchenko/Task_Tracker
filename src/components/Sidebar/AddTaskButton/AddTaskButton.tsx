import { } from 'react';
import styles from './AddTaskButton.module.css';
import { PlusIcon } from '../../../assets/icons/components';
import { useTaskTrackerContext } from '../../../context/TaskTrackerContext';

const AddTaskButton = () => {
  const { handleAddNewTask } = useTaskTrackerContext();

  return (
    <button className={styles.btn} onClick={handleAddNewTask}>
      <PlusIcon />
      Add Task
    </button>
  );
};

export default AddTaskButton;