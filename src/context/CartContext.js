import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log('Product added to cart:', product); // Debugging line
  };

  const removeFromCart = (product) => {
    setCart(prevCart => prevCart.filter(item => item._id !== product._id));
    console.log('Product removed from cart:', product); // Debugging line
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
