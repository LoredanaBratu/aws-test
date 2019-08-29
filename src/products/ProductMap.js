import React from "react";
import Product from "./Product";
import ProductData from "./ProductData";

export default function ProductMap() {
  const productWitmMap = ProductData.map(item => (
    // <Product key={product.id} name={product.name} price={product.price} />
    <Product key={item.id} product={item} />
    //product o sa fie trimis ca/prin props catre Product.js
  ));
  return <div> {productWitmMap} </div>;
}
