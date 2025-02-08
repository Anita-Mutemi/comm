import React, { useState } from "react";
import "../styles/MultiCurrencyLanguage.css";
import { motion } from "framer-motion";

const MultiCurrencyLanguage = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");

  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <motion.div className="multi-currency-language-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Multi-Currency & Language Support</h2>
      <label>Choose Currency:</label>
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="KES">KES</option>
      </select>
      <label>Choose Language:</label>
      <select value={language} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Swahili">Swahili</option>
      </select>
    </motion.div>
  );
};

export default MultiCurrencyLanguage;