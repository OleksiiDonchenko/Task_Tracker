import { useEffect, useRef, useState } from 'react';
import styles from './CreateTask.module.css';
import { CalendarIcon, CrossIcon } from '../../../../../assets/icons/components';
import Arrow from '../../../../Arrow/Arrow';
import { useTaskTrackerContext } from '../../../../../context/TaskTrackerContext';

type Priority = 'High' | 'Medium' | 'Low';

const CreateTask = () => {
  const { theme, priorityArrowStatus, setPriorityArrowStatus, togglePriorityArrow } = useTaskTrackerContext();

  const [selected, setSelected] = useState<Priority>('High');

  const dropDownRef = useRef<HTMLDivElement>(null);

  const options: Priority[] = ['High', 'Medium', 'Low'];

  const handleOptionClick = (value: Priority) => {
    setSelected(value);
    setPriorityArrowStatus('closed');
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setPriorityArrowStatus('closed');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  const [date, setDate] = useState<string>('');
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');

    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleInputClick = () => {
    if (dateInputRef.current) {
      try {
        dateInputRef.current.showPicker();
      } catch (error) {
        dateInputRef.current.focus();
      }
    }
  }

  return (
    <div data-theme={theme} className={styles.createTask}>
      <div className={styles.header}>
        <h4>Create Task</h4>
        <div className={styles.closeIcon}>
          <CrossIcon />
        </div>
      </div>
      <form className={styles.taskForm}>
        <div className={styles.formGroup}>
          <label htmlFor='task-title'>Title</label>
          <input type='text' id='task-title' name='title' required placeholder='Enter task title' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='task-desc'>Description</label>
          <textarea id='task-desc' name='description' rows={4} placeholder='Enter task description' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='task-priority' className={styles.selectLabel}>Priority</label>
          <div ref={dropDownRef} className={styles.customSelectContainer} data-arrow={priorityArrowStatus}>
            <button
              id='task-priority'
              type='button'
              className={styles.selectTrigger}
              onClick={togglePriorityArrow}>
              <span className={styles[`${selected.toLowerCase()}`]}>{selected}</span>
              <Arrow status={priorityArrowStatus} />
            </button>
            <ul className={styles.selectOptionsList}>
              {options.map((option) => (
                <li key={option}
                  className={styles[`${option.toLowerCase()}`]}
                  onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='task-date'>Due date</label>
          <div className={styles.dateInputContainer} onClick={handleInputClick}>
            <input
              ref={dateInputRef}
              type='date'
              id='task-date'
              name='due_date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className={styles.customDateInput} />
            <div className={styles.dateIcon} onClick={handleInputClick}>
              <CalendarIcon />
            </div>
          </div>
        </div>
        <div className={styles.formActions}>
          <button type='button' className={styles.btnDiscard}>Discard</button>
          <button type='submit' className={styles.btnCreate}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;