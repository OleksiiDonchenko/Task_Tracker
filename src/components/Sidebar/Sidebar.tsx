import { } from 'react';
import styles from './Sidebar.module.css';
import Title from './Title/Title';
import AddTaskButton from './AddTaskButton/AddTaskButton';
import TypesOfTasks from './TypesOfTasks/TypesOfTasks';
import Divider from '../Divider/Divider';
import FiltersOfTasks from './FiltersOfTasks/FiltersOfTasks';
import SortOfTasks from './SortOfTasks/SortOfTasks';
import { useTaskTrackerContext } from '../../context/TaskTrackerContext';

const Sidebar = () => {
  const { theme } = useTaskTrackerContext();

  return (
    <aside className={styles.sidebar} data-theme={theme}>
      <div className={styles.container}>
        <Title />
        <AddTaskButton />
        <TypesOfTasks />
        <Divider />
        <FiltersOfTasks />
        <SortOfTasks />
      </div>
    </aside>
  );
};

export default Sidebar;