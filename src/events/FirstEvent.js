import React from "react";

export default function FirstEvent() {
  function handleClick() {
    console.log("You clicked on me!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me!</button> <br />
      <button onMouseOver={() => console.log("test")}>mouse over</button>
    </div>
  );
}
