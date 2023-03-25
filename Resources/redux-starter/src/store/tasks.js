import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// Instead of axios we import this one below
import axios from "../utils/http";

// With create slice
let id = 0;
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

// Our create async method for calling api
export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  // we need to pass this rejectwithvalue function as parameter
  async (a, { rejectWithValue }) => {
    try {
      // const response = await axios.get("http://localhost:5000/api/tasks");
      // After setting base url in http.js file
      const response = await axios.get("/tasks");
      return { tasks: response.data };
    } catch (error) {
      // and wrap the error object in it to see the rejected status
      return rejectWithValue({ error: error.message });
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      id = action.payload.tasks.length;
      state.tasks = action.payload.tasks;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
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
      state.tasks[index].completed = true;
    },
  },
  // same as reducers but we can pass here our async thunk actions
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const { addTask, removeTask, completedTask, getTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
