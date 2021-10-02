import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, taskInput } = useSelector((state) => state.task);

  const onChangeInput = (value) => {
    dispatch({ type: "CHANGE_TASK", payload: value });
  };

  const onSaveTask = () => {
    const task = {
      id: new Date().getUTCMilliseconds(),
      title: taskInput,
    };

    dispatch({ type: "CREATE_TASK", payload: task });
    onChangeInput("");
  };

  return (
    <div>
      <h4>Tasks</h4>
      <input
        value={taskInput}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <button onClick={() => onSaveTask()}>Save Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
