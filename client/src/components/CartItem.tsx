import React, { FC, useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import { TCart } from '../types';
import Qty from './Qty';

type Props = {
  item: TCart;
};

const CartItem: FC<Props> = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-x-8">
      {/* product image with link */}
      <Link className="w-[70px] h-[70px]" to={`product/${item.id}`}>
        <img
          // TODO change localhost to env variable
          alt={item.item.attributes.title}
          src={`http://localhost:1337${item.item.attributes.image.data.attributes.url}`}
        />
      </Link>

      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex gap-x-4 mb-3">
          {/* title */}
          <Link to={`product/${item.id}`}>{item.item.attributes.title}</Link>

          {/* remove icon */}
          <div
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
            onClick={() => removeFromCart(item.id)}
          >
            <IoClose />
          </div>
        </div>

        <div className="flex gap-x-12 items-center mb-2">
          {/* quantity */}
          <div className="flex gap-x-4">
            <Qty item={item} />
          </div>
          <div className="text-xl text-accent">
            {`$ ${item.item.attributes.price * item.amount}`}
          </div>
        </div>

        {/* price */}
        <div>
          <span className="text-accent">{`$ ${item.item.attributes.price} per piece`}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
