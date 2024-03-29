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

import { TCart, TProduct } from '../shared/types';

type CartContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  addToCart: (item: TProduct | undefined, id: string | undefined) => void;
  removeFromCart: (id: string) => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleSelect: (event: ChangeEvent<HTMLSelectElement>, id: string) => void;
  cart: TCart[];
  itemsAmount: number;
  total: number;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  setIsOpen: () => console.log('setIsOpen'),
  addToCart: () => console.log('addToCart'),
  removeFromCart: () => console.log('removeFromCart'),
  handleInput: () => console.log('handleInput'),
  handleSelect: () => console.log('handleSelect'),
  cart: [],
  itemsAmount: 0,
  total: 0,
  clearCart: () => console.log('clearCart'),
});

type Props = {
  children: React.ReactNode;
};

const CartProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<TCart[]>([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // cart amount
  useEffect(() => {
    const totalItems = cart.reduce((acc, cur) => acc + cur.amount, 0);
    setItemsAmount(totalItems);
  }, [cart]);

  // cart total
  useEffect(() => {
    const totalPrice = cart.reduce((acc, cur) => acc + cur.item.attributes.price * cur.amount, 0);
    setTotal(totalPrice);
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
    (event: ChangeEvent<HTMLInputElement>, id: string) => {
      const value = parseInt(event.target?.value, 10);

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
    (event: ChangeEvent<HTMLSelectElement>, id: string) => {
      const value = parseInt(event.target.value, 10);

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

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

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
      total,
      clearCart,
    }),
    [
      isOpen,
      setIsOpen,
      addToCart,
      removeFromCart,
      handleInput,
      handleSelect,
      cart,
      itemsAmount,
      total,
      clearCart,
    ],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
