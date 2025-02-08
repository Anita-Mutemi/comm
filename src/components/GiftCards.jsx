import React, { useState } from "react";
import "../styles/GiftCards.css";
import { motion } from "framer-motion";

const GiftCards = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const validCoupons = { "HONEY10": 10, "MILK15": 15, "WELCOME20": 20 };

  const applyCoupon = () => {
    if (validCoupons[coupon.toUpperCase()]) {
      setDiscount(validCoupons[coupon.toUpperCase()]);
    } else {
      setDiscount(null);
    }
  };

  return (
    <motion.div className="gift-cards-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Gift Cards & Discount Coupons</h2>
      <input type="text" placeholder="Enter Coupon Code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
      <button onClick={applyCoupon}>Apply</button>
      {discount !== null && <p>Discount Applied: {discount}% Off</p>}
    </motion.div>
  );
};

export default GiftCards;