export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_TODO = "CLEAR_TODO";

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function toggleCompleted(completedTodoId) {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id: completedTodoId
    }
  };
}

export function clearTodo(todo) {
  return {
    type: CLEAR_TODO
  };
}
