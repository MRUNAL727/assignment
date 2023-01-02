import React, { createContext, useState, useReducer, useEffect } from 'react';
import { cartReducer } from './cartReducer';

export const CartContext = createContext();

const CartContextProvider = (props) => {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  useEffect(() => {
    if (state.cart) {
      localStorage.setItem('items', JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
