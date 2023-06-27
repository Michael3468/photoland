/* eslint-disable no-console */
import React, { FC, createContext, useCallback, useMemo, useState } from 'react';

import { TCart, TProduct } from '../types';

type CartContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  addToCart: (item: TProduct | undefined, id: string | undefined) => void;
  cart: TCart[];
};

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  setIsOpen: () => console.log('setIsOpen is not implemented'),
  addToCart: () => console.log('addToCart'),
  cart: [],
});

type Props = {
  children: React.ReactNode;
};

const CartProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<TCart[]>([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = useCallback(
    (item: TProduct | undefined, id: string | undefined) => {
      if (item && id) {
        const newItem = { id, item, amount: 1 };

        // check if item is already in the cart
        const cartItem = cart.find((product) => product.id === id);

        if (cartItem) {
          const newCart = cart.map((prod) => {
            if (prod.id === id) {
              setAmount(prod.amount + 1);
              return { ...prod, amount: prod.amount + 1 };
            }
            return prod;
          });
          setCart(newCart);
        } else {
          setCart([...cart, newItem]);
        }
        setIsOpen(true);
      }
    },
    [cart, setCart],
  );

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen: (value: boolean) => setIsOpen(value), addToCart, cart }),
    [isOpen, setIsOpen, addToCart, cart],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
