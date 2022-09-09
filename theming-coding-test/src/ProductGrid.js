import React from "react";
import { ProductImage } from "./ProductImage";

export const ProductGrid = ({
  heading,
  cta1,
  p1Name,
  p1Img,
  p1Price,
  p2Name,
  p2Img,
  p2Price,
  p3Name,
  p3Img,
  p3Price,
  p4Name,
  p4Img,
  p4Price,
}) => (
  <section className="elc-product-container">
    {/* <h2>{heading}</h2> */}
    <div>
      <ProductImage image={p1Img} />
      <div>
        <div className="elc-prodcut-info">
          <h1 className="elc-product-name">{p1Name}</h1>
          <h4 className="elc-product-price">{p1Price}</h4>
        </div>
        <button className="elc-product-purchase-btn btn--light">{cta1}</button>
      </div>
    </div>
    <div>
      <ProductImage image={p2Img} />
      <div>
        <div className="elc-prodcut-info">
          <h1 className="elc-product-name">{p2Name}</h1>
          <h4 className="elc-product-price">{p2Price}</h4>
        </div>
        <button className="elc-product-purchase-btn btn--light">{cta1}</button>
      </div>
    </div>
    <div>
      <ProductImage image={p3Img} />
      <div>
        <div className="elc-prodcut-info">
          <h1 className="elc-product-name">{p3Name}</h1>
          <h4 className="elc-product-price">{p3Price}</h4>
        </div>
        <button className="elc-product-purchase-btn btn--light">{cta1}</button>
      </div>
    </div>
    <div>
      <ProductImage image={p4Img} />
      <div>
        <div className="elc-prodcut-info">
          <h1 className="elc-product-name">{p4Name}</h1>
          <h4 className="elc-product-price">{p4Price}</h4>
        </div>
        <button className="elc-product-purchase-btn btn--light">{cta1}</button>
      </div>
    </div>
  </section>
);
