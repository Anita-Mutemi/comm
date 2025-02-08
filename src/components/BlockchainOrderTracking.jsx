import React, { useState } from "react";
import "../styles/BlockchainOrderTracking.css";
import { motion } from "framer-motion";

const BlockchainOrderTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const trackOrder = () => {
    // Simulated blockchain lookup
    const dummyData = {
      "TXN12345": "Shipped",
      "TXN67890": "In Transit",
      "TXN54321": "Delivered",
    };
    setOrderStatus(dummyData[trackingId] || "Invalid Tracking ID");
  };

  return (
    <motion.div className="blockchain-tracking-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Blockchain-Based Order Tracking</h2>
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />
      <button onClick={trackOrder}>Track Order</button>
      {orderStatus && <p>Status: {orderStatus}</p>}
    </motion.div>
  );
};

export default BlockchainOrderTracking;