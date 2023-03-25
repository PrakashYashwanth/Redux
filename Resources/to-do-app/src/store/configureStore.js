import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks";
import logger from "redux-logger";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api,
    // logger,
    error,
  ],
});

export default store;
