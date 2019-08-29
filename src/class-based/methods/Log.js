import React, { Component } from "react";

export default class Log extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleLoggIn = this.handleLoggIn.bind(this);
    console.log(this.state.isLoggedIn);
  }
  handleLoggIn() {
    this.setState(prevState => {
      console.log(prevState);
      return { isLoggedIn: !prevState.isLoggedIn };
    });
    console.log(this.state.isLoggedIn);
  }

  render() {
    let btnText = this.state.isLoggedIn ? "Log out" : "Log in";
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";
    return (
      <div>
        <button onClick={this.handleLoggIn}>{btnText} </button>
        <h3>You are {displayText}</h3>
      </div>
    );
  }
}
