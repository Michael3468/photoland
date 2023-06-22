import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RelatedProducts } from '../components';
import { constants } from '../constants';
import useFetch from '../hooks/useFetch';
import { TProduct } from '../types';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct>();

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

  return (
    <div className={`mb-16 ${constants.themes.main.styles.contentBlock.marginTop}`}>
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="lg:max-w-[40%] lg:min-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={
                product && `http://localhost:1337${product.attributes.image.data.attributes.url}`
              }
              alt={product && product?.attributes.image.data.attributes.name}
              className="w-full"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center p-12 rounded-lg xl:p-20 bg-primary">
            {/* category title */}
            <div className="mb-2 text-lg font-medium uppercase text-accent">
              {`${product?.attributes.categories.data[0].attributes.title} cameras`}
            </div>

            {/* title */}
            <div className="mb-4 h2">{product?.attributes.title}</div>

            {/* description */}
            <div className="mb-12">{product?.attributes.description}</div>

            {/* price & button */}
            <div className="flex gap-x-8 items-center">
              {/* price */}
              <div className="text-3xl font-semibold text-accent">
                {`$${product?.attributes.price}`}
              </div>
              <button type="button" className="btn btn-accent">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* related products */}
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
