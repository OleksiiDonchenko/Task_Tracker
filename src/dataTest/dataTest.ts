import type { Task } from "../context/types";

export const testArrTasks: Task[] = [{
  completed: false,
  header: 'Design new landing page',
  description: 'Create a modern and clean landing page for the product',
  priority: 'High',
  date: {
    month: 'May',
    day: 20,
    year: 2024,
  },
  favorites: false,
  key: Math.random(),
}, {
  completed: true,
  header: 'Fix sign up bug',
  description: 'Users are unable to sign up with Google',
  priority: 'High',
  date: {
    month: 'May',
    day: 18,
    year: 2024,
  },
  favorites: true,
  key: Math.random(),
}, {
  completed: false,
  header: 'Write API documentation',
  description: 'Add full documentation for the tasks endpoints',
  priority: 'Medium',
  date: {
    month: 'May',
    day: 18,
    year: 2024,
  },
  favorites: false,
  key: Math.random(),
}, {
  completed: false,
  header: 'Update task statuses design',
  description: 'Improve the visual style of task statuses',
  priority: 'Low',
  date: {
    month: 'May',
    day: 17,
    year: 2024,
  },
  favorites: false,
  key: Math.random(),
}];