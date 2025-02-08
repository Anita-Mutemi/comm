import React, { useEffect, useState } from "react";
import "../styles/FlashSales.css";
import { motion } from "framer-motion";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown
  const [flashProducts, setFlashProducts] = useState([
    { id: 1, name: "Organic Honey", price: "$12", discount: "20% Off" },
    { id: 2, name: "Fresh Dairy Milk", price: "$8", discount: "15% Off" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div className="flash-sales-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Flash Sales & Limited-Time Offers</h2>
      <p>Time Left: {Math.floor(timeLeft / 60)}m {timeLeft % 60}s</p>
      <ul>
        {flashProducts.map((product) => (
          <li key={product.id}>{product.name} - {product.price} ({product.discount})</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FlashSales;