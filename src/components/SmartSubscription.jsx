import React, { useState } from "react";
import "../styles/SmartSubscription.css";

const SmartSubscription = () => {
  const [subscriptions, setSubscriptions] = useState([
    { product: "Organic Honey", frequency: "Monthly", price: "$15" },
    { product: "Fresh Milk", frequency: "Weekly", price: "$10" },
    { product: "Honey Almond Butter", frequency: "Bi-Weekly", price: "$12" },
  ]);

  return (
    <div className="subscription-container">
      <h3>Smart Subscription Model</h3>
      <p>Set up automatic recurring orders and never run out of your favorite products!</p>
      <div className="subscription-list">
        {subscriptions.map((sub, index) => (
          <div key={index} className="subscription-card">
            <h4>{sub.product}</h4>
            <p>Frequency: {sub.frequency}</p>
            <p>Price: {sub.price}</p>
            <button>Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartSubscription;