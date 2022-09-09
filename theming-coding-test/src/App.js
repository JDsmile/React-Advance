import React from 'react';
import { Menu } from './Menu';
import { Product } from './Product';

import { data } from './data.js';

export const App = () =>
  <div className="wrapper">
    <Menu />
    <Product productData={data} />
  </div>
