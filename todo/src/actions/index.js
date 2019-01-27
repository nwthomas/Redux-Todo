export const ADD_TODO = "ADD_TODO";

export function addTodo(newTodo) {
  console.log("It's working!");
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}
