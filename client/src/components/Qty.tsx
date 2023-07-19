import React, { FC, useContext } from 'react';

import { CartContext } from '../context/CartContext';
import { TCart } from '../types';

type Props = {
  item: TCart;
};

const Qty: FC<Props> = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);

  return (
    <div className="flex gap-x-6 items-center text-primary">
      {item.amount < 10 ? (
        <select
          className="p-2 rounded-lg w-[100px] h-10 outline-none text-primary"
          value={item.amount}
          onChange={(event) => handleSelect(event, item.id)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      ) : (
        <input
          className="text-primary placeholder:text-primary h-10 rounded-md p-3 w-[100px] outline-accent"
          type="text"
          placeholder={`${item.amount}`}
          onBlur={(event) => handleInput(event, item.id)}
          value={item.amount}
        />
      )}
    </div>
  );
};

export default Qty;
