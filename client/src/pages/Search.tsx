import React from 'react';
import { useLocation } from 'react-router-dom';

import { CategoryNav, Product } from '../components';
import { constants } from '../constants';
import useFetch from '../hooks/useFetch';
import { TProduct } from '../types';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  const { data } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);
  const products: TProduct[] = data || [];

  return (
    <div className={`${constants.themes.main.styles.header.marginBottom}`}>
      <div className="container mx-auto">
        <div className="flex gap-x-[30px] justify-center">
          {/* category nav */}
          <CategoryNav />

          <div>
            {/* title */}
            <div className="py-3 text-xl text-center uppercase lg:text-left">
              {products.length > 0
                ? `${products.length} results for ${searchTerm}`
                : `no results found for ${searchTerm}`}
            </div>

            {/* products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-[30px]">
              {data &&
                products.map((product) => (
                  <div className="mb-5">
                    <Product key={product.id} product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
