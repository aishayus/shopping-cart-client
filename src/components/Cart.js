import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart">
      <h1 className="cart-header">Shopping Cart</h1>
      {cart.length > 0 ? (
        cart.map(product => (
          <div className="cart-item" key={product._id}>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => handleRemove(product)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
};

export default Cart;
