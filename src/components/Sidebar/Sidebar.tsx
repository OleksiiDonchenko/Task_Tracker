import { } from 'react';
import styles from './Sidebar.module.css';
import Title from './Title/Title';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import TypesOfTasks from './TypesOfTasks/TypesOfTasks';
import Divider from '../Divider/Divider';
import FiltersOfTasks from './FiltersOfTasks/FiltersOfTasks';

const Sidebar = () => {

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <Title />
        <AddTaskButton />
        <TypesOfTasks />
        <Divider />
        <FiltersOfTasks />
      </div>
    </aside>
  );
};

export default Sidebar;