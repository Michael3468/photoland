import React, { FC } from 'react';

import { ProductSlider } from '.';
import useFetch from '../hooks/useFetch';

const LatestProducts: FC = () => {
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  return (
    <div className="container mx-auto mb-16">
      <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
