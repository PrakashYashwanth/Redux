// import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./constant";

// export const addTask = (task) => {
//   return { type: ADD_TASK, payload: { task } };
// };

// export const removeTask = (id) => {
//   return { type: REMOVE_TASK, payload: { id } };
// };

// export const completedTask = (id) => {
//   return { type: COMPLETED_TASK, payload: { id } };
// };

// export const fetchTodo = () => async (dispatch) => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const task = await response.json();
//   dispatch(addTask(task.title));
// };

// Redux tool kit

import { createAction } from "@reduxjs/toolkit";
import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./constant";

export const addTask = createAction(ADD_TASK);
export const removeTask = createAction(REMOVE_TASK);
export const completedTask = createAction(COMPLETED_TASK);
