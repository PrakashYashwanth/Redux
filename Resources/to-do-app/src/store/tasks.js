import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    apiRequested: (state, _) => {
      state.loading = true;
    },
    apiRequestFailed: (state, _) => {
      state.loading = false;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
    },
  },
});

export const {
  apiRequested,
  apiRequestFailed,
  addTask,
  removeTask,
  completedTask,
  getTasks,
} = taskSlice.actions;
export default taskSlice.reducer;

const url = "/tasks";

// Action Creators
export const loadTasks = () =>
  apiCallBegan({
    url,
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  });

export const addNewTask = (task) =>
  apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
  });
export const updateTask = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completedTask.type,
  });
export const deleteTask = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type,
  });
