import { } from 'react';
import styles from './Sidebar.module.css';
import icon from '../../assets/icon.svg';
import TypesOfTasks from './TypesOfTasks/TypesOfTasks';
import AddTaskButton from './AddTaskButton/AddTaskButton';

const Sidebar = () => {

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>
        <img src={icon} alt="Icon" className={styles.icon} />
        <h2>TaskTracker</h2>
      </div>
      <AddTaskButton />
      <TypesOfTasks />
    </aside>
  );
};

export default Sidebar;