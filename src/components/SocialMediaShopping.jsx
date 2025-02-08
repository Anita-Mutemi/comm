import React from "react";
import "../styles/SocialMediaShopping.css";
import { motion } from "framer-motion";

const SocialMediaShopping = () => {
  return (
    <motion.div className="social-media-shopping-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Shop via Social Media</h2>
      <p>Click on the links below to explore our products on social media:</p>
      <ul>
        <li><a href="https://instagram.com/shop">Instagram</a></li>
        <li><a href="https://facebook.com/shop">Facebook</a></li>
        <li><a href="https://tiktok.com/shop">TikTok</a></li>
      </ul>
    </motion.div>
  );
};

export default SocialMediaShopping;