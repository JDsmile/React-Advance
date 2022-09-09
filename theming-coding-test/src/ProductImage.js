import React from "react";

export const ProductImage = ({ image }) => (
  <figure className="elc-product-image-container">
    <img className="elc-product-image" src={image} alt="Product" />
  </figure>
);
