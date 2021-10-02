import store from "./store/Store.js";

store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "INCREMENT_ONE" });

// store.dispatch({ type: "DECREMENT_ONE" });

// store.dispatch({ type: "INCREMENT", value: 10 });

// store.dispatch({ type: "CHANGE_NAME", name: "POLASH" });

store.dispatch({ type: "CHANGE_TASK", payload: "THis is another awesome task" });

const task = {
    id: new Date().getUTCMilliseconds(),
    title: store.getState().task.taskInput
}
store.dispatch({ type: "CREATE_TASK", payload: task });

// store.dispatch({ type: "CHANGE_TASK", payload: "Simple task" });

// const task2 = {
//     id: new Date().getUTCMilliseconds(),
//     title: store.getState().taskInput
// }
// store.dispatch({ type: "CREATE_TASK", payload: task2 });

console.log('tasks', store.getState().task.tasks);