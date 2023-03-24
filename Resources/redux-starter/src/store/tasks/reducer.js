// import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./constant";

// let id = 0;

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];

//     case REMOVE_TASK:
//       return state.filter((task) => task.id !== action.payload.id);

//     case COMPLETED_TASK:
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, completed: true } : task
//       );

//     default:
//       return state;
//   }
// };

// export default reducer;

// Redux tool kit

import { createReducer } from "@reduxjs/toolkit";
import { addTask, completedTask, removeTask } from "./action";

let id = 0;
export default createReducer([], (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      // Though we write mutable code, this createReucer converts it into immutable code via immer
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    })
    .addCase(removeTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    })
    .addCase(completedTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    });
  // Without builder
  // ADD_TASK: (state, action) => {
  //   // Though we write mutable code, this createReucer converts it into immutable code via immer
  //   state.push({
  //     id: ++id,
  //     task: action.payload.task,
  //     completed: false,
  //   });
  // },
  // REMOVE_TASK: (state, action) => {
  //   const index = state.findIndex((task) => task.id === action.payload.id);
  //   state.splice(index, 1);
  // },
  // COMPLETED_TASK: (state, action) => {
  //   const index = state.findIndex((task) => task.id === action.payload.id);
  //   state[index].completed = true;
  // },
});
