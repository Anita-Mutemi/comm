import React, { useState } from "react";
import "../styles/GiftWrapping.css";
import { motion } from "framer-motion";

const GiftWrapping = () => {
  const [selectedWrap, setSelectedWrap] = useState("Standard");

  return (
    <motion.div className="giftwrapping-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Gift Wrapping Options</h2>
      <div className="wrapping-options">
        {['Standard', 'Festive', 'Luxury'].map(wrap => (
          <button 
            key={wrap} 
            className={selectedWrap === wrap ? "selected" : ""} 
            onClick={() => setSelectedWrap(wrap)}
          >
            {wrap} Wrap
          </button>
        ))}
      </div>
      <p>Selected Wrapping: <strong>{selectedWrap}</strong></p>
    </motion.div>
  );
};

export default GiftWrapping;