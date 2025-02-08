import React, { useState } from "react";
import "../styles/ProductComparison.css";
import { motion } from "framer-motion";

const ProductComparison = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProductSelection = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  return (
    <motion.div className="product-comparison-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Compare Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <input type="checkbox" onChange={() => toggleProductSelection(product)} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="comparison-table">
        {selectedProducts.length > 1 ? (
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                {selectedProducts.map((product) => (
                  <th key={product.id}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>${product.price}</td>
                ))}
              </tr>
              <tr>
                <td>Description</td>
                {selectedProducts.map((product) => (
                  <td key={product.id}>{product.description}</td>
                ))}
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Select at least two products to compare.</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProductComparison;
