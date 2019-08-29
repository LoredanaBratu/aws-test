import React, { Component } from "react";
import TodoData from "./TodoData";
import TodoItemsss from "./TodoItemsss";

export default class TodoState extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const todoUpdated = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: todoUpdated
      };
    });
  }
  render() {
    const todosss = this.state.todos.map(item => (
      <TodoItemsss
        key={item.id}
        item={item}
        changeFunction={this.handleChange}
      />
    ));
    return <div> {todosss} </div>;
  }
}
