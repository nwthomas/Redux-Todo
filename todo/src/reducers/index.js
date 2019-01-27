import { ADD_TODO } from "../actions";
import { TOGGLE_COMPLETED } from "../actions";

const initialState = {
  whatever: "value",
  todos: [
    {
      task: "Do laundry",
      id: 798012347890123,
      completed: false
    },
    {
      task: "Walk the dog",
      id: 980713487098711,
      completed: false
    },
    {
      task: "Take a nap",
      id: 123094897987138,
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMPLETED:
      const updatedTodo = state.todos.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return {
        ...state,
        todos: updatedTodo
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    default:
      return state;
  }
}

export default reducer;
