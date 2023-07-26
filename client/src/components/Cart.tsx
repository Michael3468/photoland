import React, { useContext } from 'react';
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';

import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  return (
    <div className="px-4 w-full h-full text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>

        {/* cart items */}
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>

      {/* subtotal & total */}
      {cart.length > 0 && (
        <div className="flex flex-col px-6 py-10">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal:</div>
            <div>{`$ ${total}`}</div>
          </div>

          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total:</div>
            <div>{`$ ${total}`}</div>
          </div>
        </div>
      )}

      {/* buttons */}
      <div className="px-6">
        {cart.length > 0 ? (
          <div className="flex gap-x-4 justify-between">
            <button
              type="button"
              onClick={clearCart}
              className="btn btn-accent hover:bg-accent-hover"
            >
              clear cart
            </button>
            <button
              type="button"
              className="flex-1 gap-x-2 px-2 btn btn-accent hover:bg-accent-hover"
            >
              checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="flex absolute top-0 right-0 bottom-0 left-0 flex-col justify-center items-center h-full -z-10 text-white/30">
            <div className="text-2xl">Your Cart Is Empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
