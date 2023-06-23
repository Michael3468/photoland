import React, { FC } from 'react';

import useFetch from '../hooks/useFetch';
import ProductSlider from './ProductSlider';

type Props = {
  categoryTitle: string | undefined;
};

const RelatedProducts: FC<Props> = ({ categoryTitle }) => {
  const { data } = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
