const initialState = {
  taskInput: "Test Task",
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
    {
      id: 4,
      title: "Fourth Task",
    },
  ],
};

function TaskReducer(state = initialState, action) {
  switch (action.type) {

    case "CHANGE_TASK":
      return {
        ...state,
        taskInput: action.payload,
      };

    case "CREATE_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    default:
      return state;
  }
}


export default TaskReducer;