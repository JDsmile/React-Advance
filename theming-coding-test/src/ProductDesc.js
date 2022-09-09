import React from "react";

import caret from "./images/caret.svg";

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className="elc-product-desc">
    <h2 className="elc-product-desc__title">{name}</h2>
    <p className="elc-product-desc__subtitle">{description}</p>
    <figure className="elc-product-rating">
      <img src={rating} alt="Product Rating" />
      <img src={caret} alt="View All Ratings" />
    </figure>
    <section className="elc-product-features">
      <div>
        <h4 className="elc-product-features__title">Benefits</h4>
        <p className="elc-product-features__desc">{features.benefits}</p>
      </div>
      <div>
        <h4 className="elc-product-features__title">Finish</h4>
        <p className="elc-product-features__desc">{features.finish}</p>
      </div>
      <div>
        <h4 className="elc-product-features__title">Coverage</h4>
        <p className="elc-product-features__desc">{features.coverage}</p>
      </div>
      <div>
        <h4 className="elc-product-features__title">Key Ingredients</h4>
        <p className="elc-product-features__desc">
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className="elc-product-shade">
      <span className="elc-product-shade__name">{shade.name}</span>
      <div className="elc-product-shade__color"></div>
    </section>
  </section>
);
