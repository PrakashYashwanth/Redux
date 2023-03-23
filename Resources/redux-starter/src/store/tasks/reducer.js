import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./constant";

let id = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case COMPLETED_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );

    default:
      return state;
  }
};

export default reducer;
