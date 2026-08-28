import { } from 'react';
import styles from './DropDownThreeDots.module.css';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';
import type { Task } from '../../../../../context/types';

type DropDownThreeDotsProps = {
  threeDotsStatus: 'closed' | 'open';
  task: Task;
  setTaskKey: (n: number) => void;
}

const DropDownThreeDots = ({ task, threeDotsStatus, setTaskKey }: DropDownThreeDotsProps) => {
  const { theme, handleEditTask } = useTaskTrackerContext();

  return (
    <ul className={styles.threeDotsMenu} data-threedots-status={threeDotsStatus} data-theme={theme}>
      <li className={styles.edit} onClick={() => handleEditTask(task, setTaskKey)}>Edit</li>
      <li className={styles.delete}>Delete</li>
    </ul>
  );
};

export default DropDownThreeDots;