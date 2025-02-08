import React, { useState } from "react";
import "../styles/VoiceShopping.css";
import { motion } from "framer-motion";

const VoiceShopping = () => {
  const [command, setCommand] = useState("Say 'Buy honey'");

  const handleVoiceCommand = () => {
    setCommand("Processing voice command...");
    setTimeout(() => {
      setCommand("Item added to cart");
    }, 2000);
  };

  return (
    <motion.div className="voice-shopping-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Voice-Controlled Shopping</h2>
      <p>{command}</p>
      <button onClick={handleVoiceCommand}>Activate Voice Command</button>
    </motion.div>
  );
};

export default VoiceShopping;