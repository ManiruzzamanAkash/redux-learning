import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer.js";
import TaskReducer from "./TaskReducer.js";

const RootReducer = combineReducers({
    task: TaskReducer,
    counter: CounterReducer,
})

export default RootReducer;