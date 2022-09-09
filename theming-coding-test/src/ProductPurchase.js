import React from "react";

import caret from "./images/caret.png";
import minus from "./images/minus.png";
import plus from "./images/plus.png";

export const ProductPurchase = ({ price }) => (
  <section className="elc-product-purchase">
    <div className="elc-product-purchase__container">
      <div className="elc-product-purchase__container--flex">
        <p className="elc-product-purchase__container--style">Quantity</p>
        <img src={minus} alt="Decrease Quantity" />
        <p className="elc-product-purchase__container--style">1</p>
        <img src={plus} alt="Increase Quantity" />
      </div>

      <div className="elc-product-purchase__container--flex">
        <p className="elc-product-purchase__container--style">
          One Time Purchase
        </p>
        <img
          className="elc-product-purchase__container--arrow"
          src={caret}
          alt="Select Frequency"
        />
      </div>
    </div>
    <div className="elc-product-purchase-price">{price}</div>
    <button name="AddToBag" className="elc-product-purchase-btn btn--dark">
      Add To Bag
    </button>
  </section>
);
