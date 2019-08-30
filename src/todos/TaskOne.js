import React from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";

export default function TaskOne() {
  const date = new Date();
  const hours = date.getHours();
  return (
    <div>
      <h1>First Test</h1>
      <p>
        This is the first task of the rectjs course from scrimba. I hope it will
        be a successufull one (I meant the course).
      </p>
      <ul>
        <li>Arabia</li>
        <li>Greacia</li>
        <li>Italia</li>
      </ul>
      <div className="todos">
        <input type="checkbox" />
        <p>high priority</p>
        <input type="checkbox" />
        <p>mid priority</p>
        <input type="checkbox" />
        <span>mid priority</span>
        <input type="checkbox" />
        <span>low priority</span>
      </div>
      It's {hours}
      <div>
        <Link to="/todo">Click here</Link>
      </div>
    </div>
  );
}
