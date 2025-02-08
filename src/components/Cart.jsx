import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <motion.div className="cart-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {cart.map((item) => (
            <motion.div key={item.id} className="cart-item" whileHover={{ scale: 1.02 }}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart-quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <motion.button className="remove-item" onClick={() => removeFromCart(item.id)} whileTap={{ scale: 0.9 }}>
                  Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
          <h3>Total: ${getTotalPrice()}</h3>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cart;
