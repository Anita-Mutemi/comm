import React, { useEffect, useState } from "react";
import "../styles/ProductRecommendations.css";
import { motion } from "framer-motion";

const ProductRecommendations = ({ userPreferences }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const recommendations = [
        { id: 1, name: "Raw Honey", category: "Honey", price: "$15" },
        { id: 2, name: "Organic Milk", category: "Milk", price: "$10" },
        { id: 3, name: "Honeycomb", category: "Honey", price: "$25" },
      ];
      setRecommendedProducts(recommendations);
    };

    fetchRecommendations();
  }, [userPreferences]);

  return (
    <motion.div className="recommendations-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Recommended for You</h2>
      <ul>
        {recommendedProducts.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProductRecommendations;
