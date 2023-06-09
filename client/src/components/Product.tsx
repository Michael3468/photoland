/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { TProduct } from '../types';

type Props = {
  product: TProduct;
};

const Product: FC<Props> = ({ product }) => (
  <Link to={`/product/${product.id}`}>
    <div className="grad w-full h-[362px] rounded-[10px] overflow-hidden relative group">
      {/* badge */}
      {product.attributes.isNew && (
        <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
          new
        </div>
      )}

      {/* image */}
      <section className="w-full h-[200px] flex items-center justify-center relative">
        <img
          className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
          src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
          alt={product.attributes.title}
        />
      </section>

      {/* text */}
      <section className="px-6 pb-8 flex flex-col">
        {/* category title */}
        <div className="text-sm text-accent capitalize mb-2">
          {product.attributes.categories.data[0].attributes.title}
        </div>

        {/* title */}
        <div className="text-[15px] mb-4 lg:mb-9">
          {product.attributes.title.substring(0, 35)}
          ...
        </div>

        {/* price */}
        <div className="text-lg text-accent">${product.attributes.price}</div>
      </section>
    </div>
  </Link>
);

export default Product;
