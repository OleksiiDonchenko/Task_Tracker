import { useEffect, useRef, useState } from 'react';
import styles from './CreateOrEditTask.module.css';
import { useTaskTrackerContext } from '../../../../context/TaskTrackerContext';
import { useCreateOrEditTaskContext } from '../../../../context/CreateOrEditTaskContext';
import { CalendarIcon, CrossIcon } from '../../../../assets/icons/components';
import Arrow from '../../../Arrow/Arrow';

type Priority = 'High' | 'Medium' | 'Low' | undefined;

const CreateOrEditTask = ({ createOrEditTaskID }: { createOrEditTaskID: string }) => {
  const { theme, priorityArrowStatus, setPriorityArrowStatus, togglePriorityArrow, handleCloseCreateOrEditTask, editTask, setEditTask } = useTaskTrackerContext();
  const { newTask, setNewTask, handleSubmit, handleEditTaskSubmit, handleDeleteTask, convertStringToTaskDate, convertTaskDateToString, handleDiscardNewTask } = useCreateOrEditTaskContext();

  const editTaskMode = editTask !== 'new';
  const [selected, setSelected] = useState<Priority>(undefined);
  const dropDownPriorityOptionsRef = useRef<HTMLDivElement>(null);
  const options: Priority[] = ['High', 'Medium', 'Low'];
  const [date, setDate] = useState<string>('');
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Change jsx markup when an option is chosen
  const handleOptionClick = (value: Priority) => {
    setSelected(value);
    setPriorityArrowStatus('closed');
  };

  // Close the options list when the click was outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownPriorityOptionsRef.current && !dropDownPriorityOptionsRef.current.contains(e.target as Node)) {
        setPriorityArrowStatus('closed');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  // useEffect for setting the date and priority when a new task is created
  useEffect(() => {
    setDate(convertTaskDateToString(newTask.date));
    setSelected(newTask.priority);
  }, [newTask]);

  // useEffect for setting the date and priority when an edit task was chosen
  useEffect(() => {
    if (editTaskMode) {
      setDate(convertTaskDateToString(editTask?.date));
      setSelected(editTask?.priority);
    }
    if (!editTaskMode) {
      handleDiscardNewTask();
      setNewTask(prev => ({ ...prev, key: Math.random() }));
    }
  }, [editTask]);

  // Handler function for opening the calendar when clicking the whole input
  const handleDateInputClick = () => {
    if (dateInputRef.current) {
      try {
        dateInputRef.current.showPicker();
      } catch (error) {
        dateInputRef.current.focus();
      }
    }
  }

  // Handler function for close form
  const handleCloseDiscardCreateOrEditTask = () => {
    handleCloseCreateOrEditTask();
    handleDiscardNewTask();
    setNewTask(prev => ({ ...prev, key: Math.random() }));
  }

  // Handler function for deleting the editTask via the form
  const handleDeleteEditTask = () => {
    if (editTaskMode && editTask !== null) {
      handleDeleteTask(editTask.key);
      handleCloseCreateOrEditTask();
    }
  }

  if (!editTask)
    return null;

  return (
    <div data-theme={theme} id={createOrEditTaskID} className={styles.createOrEditTask}>
      <div className={styles.header}>
        <h4>{editTaskMode ? 'Edit Task' : 'Create Task'}</h4>
        <div className={styles.closeIcon} onClick={handleCloseDiscardCreateOrEditTask}>
          <CrossIcon />
        </div>
      </div>
      <form className={styles.taskForm} onSubmit={editTaskMode ? (e) => handleEditTaskSubmit(e, editTask) : handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='task-title'>Title</label>
          <input type='text' id='task-title' name='title' required placeholder='Enter task title'
            value={editTaskMode ? editTask?.title : newTask.title}
            onChange={editTaskMode
              ? e => setEditTask({ ...editTask, title: e.currentTarget.value })
              : e => setNewTask({ ...newTask, title: e.currentTarget.value })} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='task-desc'>Description</label>
          <textarea id='task-desc' name='description' rows={4} placeholder='Enter task description'
            value={editTaskMode ? editTask?.description : newTask.description}
            onChange={editTaskMode
              ? e => setEditTask({ ...editTask, description: e.currentTarget.value })
              : e => setNewTask({ ...newTask, description: e.currentTarget.value })} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='task-priority' className={styles.selectLabel}>Priority</label>
          <div ref={dropDownPriorityOptionsRef} className={styles.customSelectContainer} data-arrow={priorityArrowStatus}>
            <button
              id='task-priority'
              type='button'
              className={styles.selectTrigger}
              onClick={togglePriorityArrow}>
              <span className={styles[`${selected?.toLowerCase()}`]}>{selected}</span>
              <Arrow status={priorityArrowStatus} />
            </button>
            <ul className={styles.selectOptionsList}>
              {options.map((option) => (
                <li key={option}
                  className={styles[`${option?.toLowerCase()}`]}
                  onClick={() => {
                    handleOptionClick(option);
                    editTaskMode
                      ? setEditTask({ ...editTask, priority: option })
                      : setNewTask({ ...newTask, priority: option });
                  }}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='task-date'>Due date</label>
          <div className={styles.dateInputContainer} onClick={handleDateInputClick}>
            <input
              ref={dateInputRef}
              type='date'
              id='task-date'
              name='due_date'
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                editTaskMode
                  ? setEditTask({ ...editTask, date: convertStringToTaskDate(e.target.value) })
                  : setNewTask({ ...newTask, date: convertStringToTaskDate(e.target.value) });
              }}
              required
              className={styles.customDateInput} />
            <div className={styles.dateIcon} onClick={handleDateInputClick}>
              <CalendarIcon />
            </div>
          </div>
        </div>
        <div className={styles.formActions}>
          <button type='button' className={styles.btnDiscard} onClick={!editTaskMode ? handleDiscardNewTask : handleDeleteEditTask}>
            {editTaskMode ? 'Delete' : 'Discard'}
          </button>
          <button type='submit' className={styles.btnCreate}>
            {editTaskMode ? 'Save' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrEditTask;