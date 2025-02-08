import React, { useState } from "react";
import "../styles/MultiVendorMarketplace.css";

const MultiVendorMarketplace = () => {
  const [vendors, setVendors] = useState([
    { name: "Honey Delight", products: 25, rating: 4.8 },
    { name: "Milk Masters", products: 18, rating: 4.6 },
    { name: "BeePure", products: 32, rating: 4.9 },
  ]);

  return (
    <div className="marketplace-container">
      <h3>Multi-Vendor Marketplace</h3>
      <div className="vendor-list">
        {vendors.map((vendor, index) => (
          <div key={index} className="vendor-card">
            <h4>{vendor.name}</h4>
            <p>Products: {vendor.products}</p>
            <span>⭐ {vendor.rating}</span>
            <button>Visit Store</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiVendorMarketplace;