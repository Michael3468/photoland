/* eslint-disable no-console */
import React, { FC, createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { TCart, TProduct } from '../types';

type CartContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  addToCart: (item: TProduct | undefined, id: string | undefined) => void;
  removeFromCart: (id: string) => void;
  cart: TCart[];
  itemsAmount: number;
};

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  setIsOpen: () => console.log('setIsOpen is not implemented'),
  addToCart: () => console.log('addToCart'),
  removeFromCart: () => console.log('removeFromCart'),
  cart: [],
  itemsAmount: 0,
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

  // cart amount
  useEffect(() => {
    const totalItems = cart.reduce((acc, cur) => acc + cur.amount, 0);
    setItemsAmount(totalItems);
  }, [cart]);

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

  const removeFromCart = useCallback(
    (id: string) => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    },
    [cart],
  );

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen: (value: boolean) => setIsOpen(value),
      addToCart,
      removeFromCart,
      cart,
      itemsAmount,
    }),
    [isOpen, setIsOpen, addToCart, removeFromCart, cart, itemsAmount],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
