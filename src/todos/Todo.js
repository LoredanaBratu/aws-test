import React from "react";
import TodoItem from "./TodoItem";
import TodoData from "./TodoData";

export default function Todo() {
  const todos = TodoData.map(item => <TodoItem key={item.id} todo={item} />);
  return (
    <div>
      <h4>Tasks</h4>
      {todos}{" "}
    </div>
  );
}
