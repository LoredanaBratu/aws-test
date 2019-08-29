import React, { Component } from "react";

export default class Logged extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    let wordDisplayed;
    if (this.state.isLoggedIn) {
      wordDisplayed = "in";
    } else {
      wordDisplayed = "out";
    }
    return (
      <div>
        <h4>You are logged {wordDisplayed}</h4>
      </div>
    );
  }
}
