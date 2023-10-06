import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import { TCategory } from '../types';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  const categories = data ? (data as TCategory[]) : null;

  return (
    // TODO: refactoring add mb-7 to aside
    <aside className="hidden xl:flex h-[auto]">
      <div className="bg-primary flex flex-col w-[286px] rounded-[10px] overflow-hidden">
        <div className="flex justify-center items-center py-4 font-semibold uppercase bg-accent text-primary">
          Browse Categories
        </div>

        <div className="flex flex-col gap-y-6 p-6">
          {categories?.map((category) => (
            <Link
              key={category.id}
              className="uppercase cursor-pointer"
              to={`/products/${category.id}`}
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
