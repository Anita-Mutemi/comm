import React, { useState } from "react";
import "../styles/SubscriptionDelivery.css";
import { motion } from "framer-motion";

const SubscriptionDelivery = () => {
  const [plan, setPlan] = useState("monthly");
  const subscriptionPlans = [
    { id: "weekly", name: "Weekly Delivery", price: "$20" },
    { id: "monthly", name: "Monthly Delivery", price: "$70" },
    { id: "yearly", name: "Yearly Delivery", price: "$800" },
  ];

  return (
    <motion.div className="subscription-delivery-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Subscription-Based Product Deliveries</h2>
      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        {subscriptionPlans.map((p) => (
          <option key={p.id} value={p.id}>{p.name} - {p.price}</option>
        ))}
      </select>
      <p>Selected Plan: {subscriptionPlans.find((p) => p.id === plan)?.name}</p>
    </motion.div>
  );
};

export default SubscriptionDelivery;