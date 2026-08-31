import { useEffect, useRef, useState } from 'react';
import styles from './Tasks.module.css';
import { useTaskTrackerContext } from '../../../../context/TaskTrackerContext';
import { CalendarIcon, StarIcon, ThreeDotsVerticalIcon } from '../../../../assets/icons/components';
import { useTasksContext } from '../../../../context/TasksContext';
import DropDownThreeDots from './DropDownThreeDots/DropDownThreeDots';
import { useCreateOrEditTaskContext } from '../../../../context/CreateOrEditTaskContext';

const Tasks = () => {
  const { theme, setAllTasksCount, setActiveTasksCount, setCompletedTasksCount, setTrashTasksCount } = useTaskTrackerContext();
  const { tasks, displayedTasks } = useTasksContext();
  const { handleCompletedTask } = useCreateOrEditTaskContext();

  const [taskKey, setTaskKey] = useState(0);

  const handleThreeDotsClick = (key: number) => {
    tasks.forEach(task => {
      key === task.key ? setTaskKey(task.key) : undefined;
      key === taskKey ? setTaskKey(0) : undefined;
    })
  }

  const dropDownThreeDotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownThreeDotsRef.current && !dropDownThreeDotsRef.current.contains(e.target as Node)) {
        setTaskKey(0);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    setAllTasksCount(tasks.length);
    setActiveTasksCount(tasks.filter(task => !task.completed).length);
    setCompletedTasksCount(tasks.filter(task => task.completed && !task.deleted).length);
    setTrashTasksCount(tasks.filter(task => task.deleted).length);
  }, [tasks]);

  return (
    <ul className={styles.tasks} data-theme={theme}>
      {tasks.length > 0 ? displayedTasks.map(task => {
        return <li className={styles.task} key={task.key}>
          <label className={styles.customCheckbox}>
            <input type="checkbox" id='completed' defaultChecked={task.completed} onClick={() => handleCompletedTask(task)} />
            <span className={styles.checkmark}></span>
          </label>
          <div className={styles.text} data-text={task.completed}>
            <h4>
              {task.title}
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
            <div ref={dropDownThreeDotsRef} className={styles.threeDotsWrapper}>
              <div className={styles.threeDots} data-status={taskKey === task.key ? 'open' : 'closed'} onClick={() => handleThreeDotsClick(task.key)} tabIndex={0}>
                <ThreeDotsVerticalIcon />
              </div>
              <DropDownThreeDots task={task} threeDotsStatus={taskKey === task.key ? 'open' : 'closed'} setTaskKey={setTaskKey} />
            </div>
          </div>
        </li>
      }) : <li>No tasks yet</li>}
    </ul>
  );
};

export default Tasks;