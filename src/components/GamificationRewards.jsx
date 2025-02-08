import React, { useState } from "react";
import "../styles/GamificationRewards.css";

const GamificationRewards = () => {
  const [points, setPoints] = useState(100);
  const [achievements, setAchievements] = useState([
    { name: "First Purchase", points: 50 },
    { name: "Reviewed a Product", points: 30 },
    { name: "Referred a Friend", points: 100 },
  ]);

  const redeemPoints = () => {
    if (points >= 50) {
      setPoints(points - 50);
      alert("You redeemed 50 points for a discount coupon!");
    } else {
      alert("Not enough points to redeem.");
    }
  };

  return (
    <div className="rewards-container">
      <h3>Gamification & Rewards</h3>
      <p>Your Points: {points}</p>
      <div className="achievements">
        {achievements.map((ach, index) => (
          <div key={index} className="achievement">
            {ach.name} - {ach.points} Points
          </div>
        ))}
      </div>
      <button onClick={redeemPoints}>Redeem 50 Points</button>
    </div>
  );
};

export default GamificationRewards;