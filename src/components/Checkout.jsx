import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";
// import { motion } from "framer-motion";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert("Payment Successful! Your order has been placed.");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <motion.div className="checkout-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Checkout</h2>
      <div className="checkout-details">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <h3>Total: ${getTotalPrice()}</h3>
        <div className="payment-method">
          <label>
            <input type="radio" name="payment" value="credit_card" checked={paymentMethod === "credit_card"} onChange={() => setPaymentMethod("credit_card")} />
            Credit Card
          </label>
          <label>
            <input type="radio" name="payment" value="paypal" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} />
            PayPal
          </label>
        </div>
        <motion.button className="pay-now" onClick={handlePayment} disabled={isProcessing} whileTap={{ scale: 0.9 }}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Checkout;