import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';

import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { setIsOpen } = useContext(CartContext);

  return (
    <div className="px-4 w-full h-full text-white">
      <div>
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default Cart;
