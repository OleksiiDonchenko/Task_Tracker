import { useMemo, useState } from "react";
import type { Date, TabType, TabTypeOfPriority, TabTypeOfSort, Task } from "../context/types";
import { testArrTasks } from "../dataTest/dataTest";

const MONTH_MAP: Record<string, number> = {
  'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
  'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
};

const PRIORITY_WEIGHTS = {
  'High': 3,
  'Medium': 2,
  'Low': 1,
}

const getTaskTimestamp = (dateObj: Date): number => {
  // Find the numeric index of the month (if the month is specified incorrectly, it will return 0 - January)
  const monthIndex = MONTH_MAP[dateObj.month] ?? 0;
  // Let's create a standard Date object (in JS, months range from 0 to 11)
  return new Date(dateObj.year, monthIndex, dateObj.day).getTime();
};

export const useTasks = (activeTab: TabType, activeTabOfPriority: TabTypeOfPriority, activeTabOfSort: TabTypeOfSort) => {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState<Task[]>(testArrTasks);

  const displayedTasks = useMemo(() => {
    const filtered = tasks.filter(task => {
      // --- 1. FILTERING BY TAB ---
      if (activeTab === 'trash') {
        if (!task.deleted) return false; // In the trash we show only deleted items
      } else {
        if (task.deleted) return false;  // On regular tabs we hide deleted ones

        if (activeTab === 'active' && task.completed) return false;
        if (activeTab === 'completed' && !task.completed) return false;
        if (activeTab === 'favorites' && !task.favorites) return false;
      }

      // --- 2. FILTERING BY PRIORITY ---
      if (activeTabOfPriority === 'high' && task.priority !== 'High') return false;
      if (activeTabOfPriority === 'medium' && task.priority !== 'Medium') return false;
      if (activeTabOfPriority === 'low' && task.priority !== 'Low') return false;

      // --- 3. SEARCH FILTERING ---
      const normalizedSearch = search.trim().toLowerCase();

      const matchesTitle = task.title
        .toLowerCase()
        .includes(normalizedSearch);

      // We safely check the description: if it does not exist, we use the empty string ''
      const matchesDescription = (task.description ?? '')
        .toLowerCase()
        .includes(normalizedSearch);

      // The task is suitable if the search query is either in the title OR in the description
      const matchesSearch = matchesTitle || matchesDescription;

      return matchesSearch;
    });

    return filtered.toSorted((a, b) => {
      // We convert the custom dates of both tasks into numbers for comparison.
      const timeA = getTaskTimestamp(a.date);
      const timeB = getTaskTimestamp(b.date);

      switch (activeTabOfSort) {
        case 'oldest':
          // From oldest to newest (in ascending order of time)
          return timeA - timeB;

        case 'priority':
          // First, let's compare priorities
          const weightA = a.priority ? PRIORITY_WEIGHTS[a.priority] : 0;
          const weightB = b.priority ? PRIORITY_WEIGHTS[b.priority] : 0;

          if (weightB !== weightA) {
            return weightB - weightA; // From high to low
          }
          // If the priorities are the same, we sort them by default (from new to old)
          return timeB - timeA;

        case 'newest':
        default:
          // Newest to oldest (time descending) - default
          return timeB - timeA;
      }
    });
  }, [tasks, activeTab, activeTabOfPriority, activeTabOfSort, search]);

  return { tasks, setTasks, search, setSearch, displayedTasks };
}