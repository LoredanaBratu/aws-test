import React, { Component } from "react";

class ThirdEx extends Component {
  constructor() {
    super();
    this.state = {
      name: "Alex",
      age: "18"
    };
  }
  render() {
    return (
      <div>
        <h4>{this.state.name}</h4>
        <p>{this.state.age} years old</p>
      </div>
    );
  }
}
export default ThirdEx;
