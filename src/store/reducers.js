import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

// the initial state for the Redux store
const initialState = {
  tasks: [],
};


// the root reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
         // Add a new task to the tasks array
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
        // Delete a task based on its ID
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case TOGGLE_TASK:
         // Toggle the completion status of a task
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;

