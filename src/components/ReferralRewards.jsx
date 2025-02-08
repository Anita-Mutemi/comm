import React, { useState } from "react";
import "../styles/ReferralRewards.css";
import { motion } from "framer-motion";

const ReferralRewards = () => {
  const [referrals, setReferrals] = useState(0);
  const [points, setPoints] = useState(100); // Initial points

  const handleReferral = () => {
    setReferrals(referrals + 1);
    setPoints(points + 50);
  };

  return (
    <motion.div className="referral-rewards-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Referral & Loyalty Rewards</h2>
      <p>Invite friends and earn points!</p>
      <button onClick={handleReferral}>Refer a Friend</button>
      <p>Referrals: {referrals}</p>
      <p>Loyalty Points: {points}</p>
    </motion.div>
  );
};

export default ReferralRewards;
