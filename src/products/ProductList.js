import React from "react";
import Product from "./Product";

export default function ProductList() {
  return (
    <div>
      <Product name="pencil" price="20$" />
      <Product name="rubber" price="10$" />
      <Product name="notebook" price="25$" />
    </div>
  );
}
