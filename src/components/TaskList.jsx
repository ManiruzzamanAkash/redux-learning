import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNewTask, fetchAllTasks } from '../store/TaskReducer';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, taskInput, loadingTasks, loadingCreateTask } = useSelector((state) => state.task);

  const onChangeInput = (value) => {
    dispatch({ type: "CHANGE_TASK", payload: value });
  };

  const onSaveTask = () => {
    // const task = {
    //   id: new Date().getUTCMilliseconds(),
    //   title: taskInput,
    // };

    // dispatch({ type: "CREATE_TASK", payload: task });
    // onChangeInput("");
    dispatch(createNewTask(taskInput));
  };

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, []);

  return (
    <div>
      <h4>Tasks</h4>
      <input
        value={taskInput}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <button onClick={() => onSaveTask()}>
        {loadingCreateTask ? 'Saving...' : 'Save'}
      </button>

      <br />
      {
        loadingTasks ? <h2>Loading...</h2> :
          <ul className="task-ul">
            {tasks.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
      }

    </div>
  );
};

export default TaskList;
