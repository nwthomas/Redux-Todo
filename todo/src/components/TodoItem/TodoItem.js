import React from "react";

const TodoItem = props => {
  return (
    <div
      className="todo-item"
      onClick={() => props.toggleCompleted(props.todoOnProps.id)}
    >
      <h2>{props.todoOnProps.task}</h2>
    </div>
  );
};

export default TodoItem;
