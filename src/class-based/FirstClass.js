import React, { Component } from "react";

class FirstClass extends Component {
  render() {
    return (
      <div>
        <Greetings />
        <Header />
      </div>
    );
  }
}
export default FirstClass;

class Header extends Component {
  render() {
    return (<header><p>Welcome, {this.props.username}!</p></header>)
  }
}
export default Header;

class Greetings extends Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if(hours<12){
            timeOfDay="morning";
        }else if (hours>=12 && hours <17){
            timeOfDay="afternoon";
        }
        else { timeOfDay="evening"}
        return (
            <h3>Good {timeOfDay} to you, sir or madam!</h3>
        )
    }
}
export default Greetings;
