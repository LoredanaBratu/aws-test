import React from "react";

export default function Checkboxes() {
  const firstName = "Ana";
  const lastName = "Blandiana";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
    fontWeight: 700
  };

  if (hours <= 12) {
    timeOfDay = "morning";
    styles.color = "red";
  } else if (hours > 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "green";
  } else timeOfDay = "evening";
  styles.color = "blue";

  return (
    <div className="container">
      <p>
        Hello {firstName} {lastName} !
      </p>
      <p>It'about {date.getHours()} o'clock!</p> {/*13 daca vreau 1 pun %12*/}
      <input type="checkbox" />
      <span>fisrt item</span>
      <br />
      <input type="checkbox" />
      <span>second item</span>
      <br />
      <input type="checkbox" />
      <span>third item</span>
      <p style={styles}>Good {timeOfDay}!</p>
    </div>
  );
}
