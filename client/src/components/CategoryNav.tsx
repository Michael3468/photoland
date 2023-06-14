import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import { TCategory } from '../types';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  const categories = data ? (data as TCategory[]) : null;

  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[10px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {categories?.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="cursor-pointer uppercase"
            >
              {category.attributes.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
