import React, { useState } from "react";
import "../styles/DarkModeToggle.css";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <motion.div className="dark-mode-toggle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Theme Customization</h2>
      <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
    </motion.div>
  );
};

export default DarkModeToggle;