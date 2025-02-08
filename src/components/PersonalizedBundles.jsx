import React from "react";
import "../styles/PersonalizedBundles.css";

const PersonalizedBundles = ({ bundles }) => {
  return (
    <div className="bundles-container">
      <h3>Recommended Bundles</h3>
      <div className="bundles-list">
        {bundles.map((bundle, index) => (
          <div key={index} className="bundle-card">
            <img src={bundle.image} alt={bundle.name} />
            <h4>{bundle.name}</h4>
            <p>{bundle.description}</p>
            <span>${bundle.price}</span>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedBundles;