import React, { FC, SetStateAction } from 'react';
import { FiX } from 'react-icons/fi';

type Props = {
  setCatNavMobile: React.Dispatch<SetStateAction<boolean>>;
};

const CategoryNavMobile: FC<Props> = ({ setCatNavMobile }) => (
  <div className="w-full h-full bg-primary p-8">
    {/* close icon */}
    <div className="flex justify-end mb-8 cursor-pointer" onClick={() => setCatNavMobile(false)}>
      <FiX className="text-3xl" />
    </div>
    CategoryNavMobile
  </div>
);

export default CategoryNavMobile;
