console.log("Hello");

import { createStore } from "redux";

const initialState = {
  value: 0,
  name: "AKASH",
  taskInput: "",
  tasks: [
    {
      id: 1,
      title: "First Task",
    },
    {
      id: 2,
      title: "Second Task",
    },
    {
      id: 3,
      title: "Third Task",
    },
  ],
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_ONE":
      return {
        ...state,
        value: state.value + 1,
      };

    case "DECREMENT_ONE":
      return {
        ...state,
        value: state.value - 1,
      };

    case "INCREMENT":
      return {
        ...state,
        value: state.value + action.value,
      };

    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name,
      };

    case "CHANGE_TASK":
      return {
        ...state,
        taskInput: action.payload,
      };

    case "CREATE_TASK":
      return {
        ...state,
        tasks: [ action.payload, ...state.tasks ],
      };

    default:
      return state;
  }
}

let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "INCREMENT_ONE" });

// store.dispatch({ type: "DECREMENT_ONE" });

// store.dispatch({ type: "INCREMENT", value: 10 });

// store.dispatch({ type: "CHANGE_NAME", name: "POLASH" });

store.dispatch({ type: "CHANGE_TASK", payload: "THis is another awesome task" });

const task = {
    id: new Date().getUTCMilliseconds(),
    title: store.getState().taskInput
}
store.dispatch({ type: "CREATE_TASK", payload: task });

store.dispatch({ type: "CHANGE_TASK", payload: "Simple task" });

const task2 = {
    id: new Date().getUTCMilliseconds(),
    title: store.getState().taskInput
}
store.dispatch({ type: "CREATE_TASK", payload: task2 });