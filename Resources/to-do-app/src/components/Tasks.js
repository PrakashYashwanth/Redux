import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../contexts/storeContext";
import { loadTasks } from "../store/tasks";

const Tasks = () => {
  const store = useContext(StoreContext);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    store.dispatch(loadTasks());
    const unsubscribe = store.subscribe(() => {
      const storeTasks = store.getState().tasks.tasks;
      if (storeTasks !== tasks) setTasks(storeTasks);
    });

    return () => unsubscribe();
  }, []);

  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <p key={task.id}>{task.task}</p>
      ))}
    </div>
  );
};

export default Tasks;
