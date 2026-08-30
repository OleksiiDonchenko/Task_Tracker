import { useMemo, useState } from "react";
import type { TabType, Task } from "../context/types";
import { testArrTasks } from "../dataTest/dataTest";

export const useTasks = (activeTab: TabType) => {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState<Task[]>(testArrTasks);

  const displayedTasks = useMemo(() => {
    return tasks.filter(task => {
      // --- 1. FILTERING BY TAB ---
      if (activeTab === 'trash') {
        if (!task.deleted) return false; // In the trash we show only deleted items
      } else {
        if (task.deleted) return false;  // On regular tabs we hide deleted ones

        if (activeTab === 'active' && task.completed) return false;
        if (activeTab === 'completed' && !task.completed) return false;
      }

      // --- 2.SEARCH FILTERING ---
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
  }, [tasks, activeTab, search]);

  return { tasks, setTasks, search, setSearch, displayedTasks };
}