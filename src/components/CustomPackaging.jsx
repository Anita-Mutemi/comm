import React, { useState } from "react";
import "../styles/CustomPackaging.css";
import { motion } from "framer-motion";

const CustomPackaging = () => {
  const [message, setMessage] = useState("");

  return (
    <motion.div className="packaging-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Custom Packaging</h2>
      <textarea
        placeholder="Enter your personalized message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p><strong>Preview:</strong> {message}</p>
    </motion.div>
  );
};

export default CustomPackaging;