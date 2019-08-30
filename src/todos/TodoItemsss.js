import React, { Component } from "react";
// import { isTemplateElement } from "@babel/types";

export default class TodoItemsss extends Component {
  render() {
    console.log(this.props);
    const styleCompleted = {
      color: "grey",
      fontSize: "32",
      fontStyle: "italic",
      textDecoration: "line-through"
    };
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => {
            this.props.changeFunction(this.props.item.id);
          }}
        />
        <span style={this.props.item.completed ? styleCompleted : null}>
          {this.props.item.text}
        </span>
        {/* <h3>{this.props.item.text}</h3> */}
      </div>
    );
  }
}
