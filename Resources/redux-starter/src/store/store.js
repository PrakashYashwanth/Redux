import {
  legacy_createStore as createStore,
  applyMiddleware,
  //   compose,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./tasks/reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// export default store;

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         trace: true,
//       })
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(reducer, enhancer);

// with redux devtools extension package

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
  trace: true,
});
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
