import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/OrderSummary.css";
import { motion } from "framer-motion";

const OrderSummary = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  return (
    <motion.div className="order-summary-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Order Summary</h2>
      {cart.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <motion.div className="order-list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h3>Grand Total: ${getTotalPrice()}</h3>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OrderSummary;