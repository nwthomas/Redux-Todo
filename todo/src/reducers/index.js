import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_TODO } from "../actions";

const data = [
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
];

const todos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : data;

const initialState = {
  whatever: "value",
  todos: todos
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMPLETED:
      const updatedTodo = state.todos.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return {
        ...state,
        todos: updatedTodo
      };
    case CLEAR_TODO:
      const clearedTodos = state.todos.filter(todo => todo.completed === false);
      localStorage.setItem("todos", JSON.stringify(clearedTodos));
      return {
        ...state,
        todos: clearedTodos
      };
    case ADD_TODO:
      const updatedTodos = [
        ...state.todos,
        {
          task: action.payload,
          id: Date.now(),
          completed: false
        }
      ];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos
      };
    default:
      return state;
  }
}

export default reducer;
