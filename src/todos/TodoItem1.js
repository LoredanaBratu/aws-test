import React from "react";

export default function TodoItem1(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={props.handleChange}
      />
      {props.todo.text}
    </div>
  );
}
