import { } from 'react';
import styles from './CreateOrEditTask.module.css';
import CreateTask from './CreateTask/CreateTask';

const CreateOrEditTask = () => {
  return (
    <div className={styles.createOrEditTask}>
      <CreateTask />
    </div>
  );
};

export default CreateOrEditTask;