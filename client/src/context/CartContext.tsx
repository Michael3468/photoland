/* eslint-disable no-console */
import React, {
  ChangeEvent,
  FC,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { TCart, TProduct } from '../types';

type CartContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  addToCart: (item: TProduct | undefined, id: string | undefined) => void;
  removeFromCart: (id: string) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>, id: string) => void;
  cart: TCart[];
  itemsAmount: number;
};

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  setIsOpen: () => console.log('setIsOpen is not implemented'),
  addToCart: () => console.log('addToCart'),
  removeFromCart: () => console.log('removeFromCart'),
  handleInput: () => console.log('handleInput'),
  handleSelect: () => console.log('handleSelect'),
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

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      const value = parseInt(e.target?.value, 10);

      const cartItem = cart.find((item) => item.id === id);

      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            if (Number.isNaN(value)) {
              setAmount(1);
              return { ...item, amount: 1 };
            }

            setAmount(value);
            return { ...item, amount: value };
          }

          return item;
        });

        setCart(newCart);
      }

      setIsOpen(true);
    },
    [cart],
  );

  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>, id: string) => {
      const value = parseInt(e.target.value, 10);

      const cartItem = cart.find((item) => item.id === id);

      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            setAmount(value);
            return { ...item, amount: value };
          }

          return item;
        });

        setCart(newCart);
      }
    },
    [cart],
  );

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen: (value: boolean) => setIsOpen(value),
      addToCart,
      removeFromCart,
      handleInput,
      handleSelect,
      cart,
      itemsAmount,
    }),
    [isOpen, setIsOpen, addToCart, removeFromCart, handleInput, handleSelect, cart, itemsAmount],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
