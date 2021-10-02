import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './store/Store';

console.log('store', store.getState());
store.dispatch({ type: 'CHANGE_TASK', payload: 'Task Name New' })
console.log('store', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
