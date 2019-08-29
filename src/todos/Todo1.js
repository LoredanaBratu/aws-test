import React, { Component } from "react";
import TodoData from "./TodoData";
import TodoItem1 from "./TodoItem1";

export default class Todo1 extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    console.log("test");
    if (this.todos.id === id) {
      this.todos.completed = !this.todos.completed;
    }
  }
  render() {
    const todosMap = this.state.todos.map(item => (
      <TodoItem1 key={item.id} todo={item} handleChange={this.handleChange} />
    ));
    return <div> {todosMap} </div>;
  }
}
