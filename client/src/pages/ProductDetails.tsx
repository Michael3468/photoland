import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RelatedProducts } from '../components';
import { constants } from '../constants';
import { CartContext } from '../context/CartContext';
import useFetch from '../hooks/useFetch';
import { TProduct } from '../types';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct>();

  // get product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  useEffect(() => {
    if (data) {
      setProduct(data[0]);
    }
  }, [data]);

  if (!data) {
    return (
      <div className={`container mx-auto ${constants.themes.main.styles.contentBlock.marginTop}`}>
        Loading...
      </div>
    );
  }

  // category title
  const categoryTitle = product?.attributes.categories.data[0].attributes.title;

  return (
    <div className={`mb-16 ${constants.themes.main.styles.contentBlock.marginTop}`}>
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="lg:max-w-[40%] lg:min-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              alt={product && product?.attributes.image.data.attributes.name}
              className="p-2 w-full sm:p-5"
              src={
                product && `${process.env.REACT_APP_API_URL}${product.attributes.image.data.attributes.url}`
              }
            />
          </div>
          <div className="flex flex-col flex-1 justify-center p-6 rounded-lg sm:p-10 lg:p-12 xl:p-20 bg-primary">
            {/* category title */}
            <div className="mb-2 text-lg font-medium uppercase text-accent">
              {`${product?.attributes.categories.data[0].attributes.title} cameras`}
            </div>

            {/* title */}
            <div className="mb-4 h2">{product?.attributes.title}</div>

            {/* description */}
            <div className="mb-12">{product?.attributes.description}</div>

            {/* price & button */}
            <div className="flex flex-col gap-x-8 items-center xs:flex-row">
              {/* price */}
              <div className="mb-7 text-3xl font-semibold text-accent xs:mb-0">
                {`$${product?.attributes.price}`}
              </div>
              <button
                className="btn btn-accent"
                type="button"
                onClick={() => addToCart(product, id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
