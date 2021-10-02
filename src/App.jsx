import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import TaskList from "./components/TaskList";

function App() {
  const { tasks } = useSelector((state) => state.task);

  return (
    <div className="App">
      <h2>Total Tasks - {tasks.length}</h2>
      <Counter />
      <br />
      <TaskList />
    </div>
  );
}

export default App;
