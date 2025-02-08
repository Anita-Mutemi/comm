import React from "react";
import "../styles/ARProductPreview.css";
import { motion } from "framer-motion";

const ARProductPreview = () => {
  return (
    <motion.div className="ar-preview-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Try Before You Buy - AR Preview</h2>
      <p>Scan the QR code below to view products in Augmented Reality.</p>
      <img src="/images/ar-qr-code.png" alt="Scan to Preview in AR" />
    </motion.div>
  );
};

export default ARProductPreview;