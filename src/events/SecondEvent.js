import React, { Component } from "react";

export default class SecondEvent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }
  handleClick() {
    //this.setState({ count: 1 });
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleOver() {
    this.setState(value => {
      return {
        count: value.count * 2
      };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOver}>Over me</button>
      </div>
    );
  }
}
