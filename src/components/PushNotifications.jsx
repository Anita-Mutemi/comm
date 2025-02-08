import React, { useState, useEffect } from "react";
import "../styles/PushNotifications.css";
import { motion } from "framer-motion";

const PushNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const newNotification = setTimeout(() => {
      setNotifications([...notifications, "New sale on Honey Products! Check it out now."]);
    }, 5000);

    return () => clearTimeout(newNotification);
  }, [notifications]);

  return (
    <motion.div className="notifications-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Notifications & Alerts</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PushNotifications;