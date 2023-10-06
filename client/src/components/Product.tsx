/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { TProduct } from '../shared/types';

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
          alt={product.attributes.title}
          className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
          src={`${process.env.REACT_APP_API_URL}${product.attributes.image.data.attributes.url}`}
        />
      </section>

      {/* text */}
      <section className="flex flex-col px-6 pb-8">
        {/* category title */}
        <div className="mb-2 text-sm capitalize text-accent">
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
