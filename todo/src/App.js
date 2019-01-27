import React, { Component } from "react";
import TodoList from "./containers/TodoList/TodoList";
import TodoForm from "./containers/TodoForm/TodoForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
