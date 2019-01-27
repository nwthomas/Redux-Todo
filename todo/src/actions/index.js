export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export function addTodo(newTodo) {
  console.log("Inside new todo!");
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function toggleCompleted(completedTodoId) {
  console.log("Inside completed todo!");
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id: completedTodoId
    }
  };
}
