import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import "../styles/UserProfile.css";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const { orderHistory } = useContext(CartContext);

  return (
    <motion.div className="user-profile-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>My Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
      <h2>Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No past orders yet.</p>
      ) : (
        <div className="order-history">
          {orderHistory.map((order, index) => (
            <div key={index} className="order-item">
              <h4>Order #{order.id}</h4>
              <p>Date: {order.date}</p>
              <p>Total: ${order.total}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>{item.name} (x{item.quantity})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default UserProfile;