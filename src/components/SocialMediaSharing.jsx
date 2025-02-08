import React from "react";
import "../styles/SocialMediaSharing.css";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialMediaSharing = ({ productName, productUrl }) => {
  const shareText = `Check out this amazing product: ${productName} - ${productUrl}`;

  return (
    <div className="social-sharing-container">
      <h3>Share this Product</h3>
      <div className="social-icons">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href={`https://api.whatsapp.com/send?text=${shareText}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default SocialMediaSharing;