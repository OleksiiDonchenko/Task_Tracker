import { useState } from "react";
import type { Task } from "../context/types";
import { testArrTasks } from "../dataTest/dataTest";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(testArrTasks);

  return { tasks, setTasks };
}