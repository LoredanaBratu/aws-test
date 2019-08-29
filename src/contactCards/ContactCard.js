import React from "react";

export default function ContactCard(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="contact-card">
        <h3>{props.name}</h3>
        <p>Phone:{props.phone} </p>
        <p>Email:{props.email}</p>
        <hr />
      </div>
      {/* sau */}
      {/* <div className="contact-card">
        <h3>{props.contact.name}</h3>
        <p>Phone:{props.contact.phone} </p>
        <p>Email:{props.contact.email}</p>
        <hr />
      </div> */}
    </div>
  );
}
