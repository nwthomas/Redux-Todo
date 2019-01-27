import React, { Component } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";

export default class ToDoList extends Component {
  contructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="todos__container">
        {this.state.todos.map((todo, index) => {
          return <TodoItem key={index} todoOnProps={todo} />;
        })}
      </div>
    );
  }
}
