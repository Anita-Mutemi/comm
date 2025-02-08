import React from "react";
import "../styles/OneClickReorder.css";
import { motion } from "framer-motion";

const OneClickReorder = ({ lastOrder }) => {
  const handleReorder = () => {
    alert("Your last order has been reordered successfully!");
  };

  return (
    <motion.div className="reorder-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>One-Click Reorder</h2>
      <p>Last Order: {lastOrder}</p>
      <button onClick={handleReorder} className="reorder-btn">Reorder Now</button>
    </motion.div>
  );
};

export default OneClickReorder;