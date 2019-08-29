import React from "react";

export default function Joke(props) {
  console.log(props.question);
  return (
    <div className="joke-item">
      <p style={{ color: !props.answer && "#888888" }}>
        <b>Question: </b>
        {props.question}
      </p>
      <p style={{ display: props.answer ? "block" : "none" }}>
        <b>Answer:</b>
        {props.answer}
        {/* sau 
        <b style={{ display: !props.answer && "none" }}>Answer:</b> 
        {props.answer}*/}
      </p>
      <hr />
    </div>
  );
}
