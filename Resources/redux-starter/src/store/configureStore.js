// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   //   compose,
// } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import reducer from "./tasks/reducer";

// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// // export default store;

// // const composeEnhancers =
// //   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// //         trace: true,
// //       })
// //     : compose;

// // const enhancer = composeEnhancers(applyMiddleware(thunk));
// // const store = createStore(reducer, enhancer);

// // with redux devtools extension package

// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsDenylist, actionsCreators and other options if needed
//   trace: true,
// });
// const store = createStore(
//   reducer,
//   /* preloadedState, */ composeEnhancers(
//     applyMiddleware(thunk)
//     // other store enhancers if any
//   )
// );

// export default store;

//Redux Toolkit
// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./tasks/reducer";

// // Configure store comes with dev tools enabled and also allows us to dispatch async actions which is helpful in api requests
// // If we use create store function, then we need to add a middleware for making api requesta .
// // But redux tool kit takes care of that and it will also make our code short and easy to maintain
// const store = configureStore({
//   reducer,
// });

// export default store;

// Create slice version

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks";
import employeeReducer from "./employees";
// import log from "../middleware/log";
// import logger from "redux-logger";
import error from "./middleware/error";
import api from "./middleware/api";

// Configure store comes with dev tools enabled and also allows us to dispatch async actions which is helpful in api requests
// If we use create store function, then we need to add a middleware for making api requesta .
// But redux tool kit takes care of that and it will also make our code short and easy to maintain
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    // logger,
    api,
    error,
  ],
});

export default store;
