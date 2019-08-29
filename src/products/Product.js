import React from "react";

export default function Product(props) {
  console.log(props);
  return (
    <div>
      <h5>Product: {props.product.name}</h5>
      <h5>Price: {props.product.price}</h5>
    </div>
  );
}
