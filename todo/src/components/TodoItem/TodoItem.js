import React from "react";

const TodoItem = props => {
  return (
    <div className="todo-item">
      <h2>{props.task}</h2>
    </div>
  );
};

export default TodoItem;
