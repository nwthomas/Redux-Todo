import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

class TodoForm extends Component {
  state = {
    newTodoText: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodoText);
  };

  render() {
    return (
      <form className="todo__form" onSubmit={this.addTodo}>
        <input
          type="text"
          name="newTodoText"
          onChange={this.handleChange}
          value={this.state.newTodoText}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
