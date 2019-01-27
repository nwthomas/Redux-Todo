import React, { Component } from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import { connect } from "react-redux";
import { toggleCompleted } from "../../actions";

class TodoList extends Component {
  render() {
    return (
      <div className="todos__container">
        {this.props.todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todoOnProps={todo}
              toggleCompleted={this.props.toggleCompleted}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(TodoList);
