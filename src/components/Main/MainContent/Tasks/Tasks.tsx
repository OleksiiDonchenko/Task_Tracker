import { } from 'react';
import styles from './Tasks.module.css';
import { useTaskTrackerContext } from '../../../../context/TaskTrackerContext';
import { CalendarIcon, StarIcon, ThreeDotsVerticalIcon } from '../../../../assets/icons/components';

const Tasks = () => {
  const { theme, tasks } = useTaskTrackerContext();

  return (
    <ul className={styles.tasks} data-theme={theme}>
      {tasks.map(task => {
        return <li className={styles.task} key={task.key}>
          <label className={styles.customCheckbox}>
            <input type="checkbox" id='completed' defaultChecked={task.completed} />
            <span className={styles.checkmark}></span>
          </label>
          <div className={styles.text} data-text={task.completed}>
            <h4>
              {task.header}
            </h4>
            <p>
              {task.description.length <= 54 ? task.description : `${task.description.slice(0, 54 - 3)}...`}
            </p>
          </div>
          <div className={styles.pdsd}>
            <div className={styles.priorityWrapper}>
              <div className={styles.priority} data-priority={task.priority}>
                {task.priority}
              </div>
            </div>
            <div className={styles.date}>
              <CalendarIcon />
              {`${task.date.month} ${task.date.day}, ${task.date.year}`}
            </div>
            <StarIcon favorites={task.favorites} />
            <ThreeDotsVerticalIcon />
          </div>
        </li>
      })}
    </ul>
  );
};

export default Tasks;