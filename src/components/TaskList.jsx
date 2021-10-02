import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.task);

  return (
    <div>
      <h4>Tasks</h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
