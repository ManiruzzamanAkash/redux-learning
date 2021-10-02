console.log("Hello");

import { createStore } from "redux";

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_ONE":
      return {
        value: state.value + 1,
      };

    case "DECREMENT_ONE":
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
}

let store = createStore(counterReducer);

console.log("store state", store.getState());

store.dispatch({ type: "INCREMENT_ONE" });
console.log("store state after", store.getState());

store.dispatch({ type: "DECREMENT_ONE" });
console.log("store state after dec", store.getState());
