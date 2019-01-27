import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
  return (
    <div
      className="todo-item"
      onClick={() => props.toggleCompleted(props.todoOnProps.id)}
    >
      <h2 className={props.todoOnProps.completed ? "completed" : null}>
        {props.todoOnProps.task}
      </h2>
    </div>
  );
};

export default TodoItem;
