import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  loadingTasks: false,
  loadingCreateTask: false,
};


export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  }
)

export const createNewTask = createAsyncThunk(
  'tasks/createNewTask',
  async (taskInput) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title: taskInput,
        userId: 1,
      });
    return response.data;
  }
)

function TaskReducer(state = initialState, action) {
  switch (action.type) {

    /**
     * Task List get actions
     */
    case "tasks/fetchAllTasks/pending":
      return {
        ...state,
        loadingTasks: true,
      }

    case "tasks/fetchAllTasks/rejected":
      return {
        ...state,
        loadingTasks: false,
      }

    case "tasks/fetchAllTasks/fulfilled":
      return {
        ...state,
        loadingTasks: false,
        tasks: action.payload
      }

    /**
     * Create task actions
     */
    case "tasks/createNewTask/pending":
      return {
        ...state,
        loadingCreateTask: true,
      }

    case "tasks/createNewTask/rejected":
      return {
        ...state,
        loadingCreateTask: false,
      }

    case "tasks/createNewTask/fulfilled":
      return {
        ...state,
        loadingCreateTask: false,
        tasks: [action.payload, ...state.tasks],
        taskInput: ''
      }

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