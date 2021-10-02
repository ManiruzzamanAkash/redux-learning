import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import TaskReducer from "./TaskReducer";

const RootReducer = combineReducers({
    task: TaskReducer,
    counter: CounterReducer,
})

export default RootReducer;