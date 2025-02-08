import React, { useState } from "react";
import "../styles/SubscriptionMembership.css";
import { motion } from "framer-motion";

const SubscriptionMembership = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  return (
    <motion.div className="subscription-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Subscription Plans</h2>
      <div className="plans">
        {['Basic', 'Premium', 'Elite'].map(plan => (
          <button 
            key={plan} 
            className={selectedPlan === plan ? "selected" : ""} 
            onClick={() => setSelectedPlan(plan)}
          >
            {plan} Plan
          </button>
        ))}
      </div>
      <p>Selected Plan: <strong>{selectedPlan}</strong></p>
    </motion.div>
  );
};

export default SubscriptionMembership;