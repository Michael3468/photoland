import React, { FC, createContext, useMemo, useState } from 'react';

type CartContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  // eslint-disable-next-line no-console
  setIsOpen: () => console.log('setIsOpen is not implemented'),
});

type Props = {
  children: React.ReactNode;
};

const CartProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen: (value: boolean) => setIsOpen(value) }),
    [isOpen, setIsOpen],
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
