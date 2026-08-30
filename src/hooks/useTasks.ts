import { useMemo, useState } from "react";
import type { Task } from "../context/types";
import { testArrTasks } from "../dataTest/dataTest";

export const useTasks = () => {
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState<Task[]>(testArrTasks);

  const filtredTasks = useMemo(() => {
    return tasks.filter(task =>
      Object.values(task)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [tasks, search]);

  return { tasks, setTasks, search, setSearch, filtredTasks };
}