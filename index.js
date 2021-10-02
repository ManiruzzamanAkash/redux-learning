console.log("Hello");

import { createStore } from "redux";

const initialState = {
  value: 0,
  name: 'AKASH'
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

    case "INCREMENT":
        return {
            value: state.value + action.value,
        };

    case "CHANGE_NAME":
        return {
            name: action.name
        };

    default:
      return state;
  }
}

let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "INCREMENT_ONE" });

store.dispatch({ type: "DECREMENT_ONE" });

store.dispatch({ type: "INCREMENT", value: 10 });

store.dispatch({ type: "CHANGE_NAME", name: 'POLASH' });
