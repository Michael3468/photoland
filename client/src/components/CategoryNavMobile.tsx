import React, { FC, SetStateAction } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import { TCategory } from '../shared/types';

type Props = {
  setCatNavMobile: React.Dispatch<SetStateAction<boolean>>;
};

const CategoryNavMobile: FC<Props> = ({ setCatNavMobile }) => {
  const { data } = useFetch('/categories');
  const categories: TCategory[] = data || [];

  return (
    <div className="p-8 w-full h-full bg-primary">
      {/* close icon */}
      <div className="flex justify-end mb-8 cursor-pointer" onClick={() => setCatNavMobile(false)}>
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {categories.map((category) => (
          <Link key={category.id} className="font-medium uppercase" to={`/products/${category.id}`}>
            {`${category.attributes.title} cameras`}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
