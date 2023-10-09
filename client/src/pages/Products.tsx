import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryNav, Product } from '../components';
import { constants } from '../constants';
import useFetch from '../hooks/useFetch';
import { TProduct } from '../shared/types';

const Products = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
  const products = data as unknown as TProduct[];
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setTitle(products[0].attributes.categories.data[0].attributes.title);
    }
  }, [data, products]);

  return (
    <div className={`mb-16 ${constants.themes.main.styles.contentBlock.marginTop}`}>
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />

          <main className="flex flex-col mx-auto">
            {/* title */}
            <div className="py-3 text-xl text-center uppercase lg:text-left w-[100%]">{`${title} cameras`}</div>

            {/* product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lx:grid-cols-4 gap-[15px] md:gap-[30px]">
              {products?.map((product) => <Product key={product.id} product={product} />)}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
