import React from "react";
const Content = props => (
  <div className="box content">
    <h1 style={{ textAlign: "center", marginBottom: "40px" }}>{props.title}</h1>
    <p
      style={{ marginLeft: "390px", marginRight: "390px", textIndent: "40px" }}
    >
      {props.content}
    </p>
    <p></p>
  </div>
);
export default Content;
