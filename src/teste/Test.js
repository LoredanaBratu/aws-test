import React from "react";

export default function Test(props) {
  const nums = [1, 2, 3, 4, 5];
  const numbers = nums.map(function(num) {
    return num * 2;
  });
  console.log(numbers);
  return (
    <div className="conatiner">
      <div>
        <h3>Name:{props.name}</h3>
        <h3 style={{ display: !props.grade && "none" }}>
          Grade: {props.grade}
        </h3>
      </div>
    </div>
  );
}
