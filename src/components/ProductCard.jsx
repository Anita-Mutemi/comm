import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => count > 1 && setCount(count - 1);

  return (
    <motion.div className="product-card" whileHover={{ scale: 1.05 }}>
      <img src={product.image} alt={product.name} className="product-image" />
      {product.video && (
        <motion.video className="product-video" controls whileHover={{ scale: 1.02 }}>
          <source src={product.video} type="video/mp4" />
        </motion.video>
      )}
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="quantity-control">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <motion.button className="add-to-cart" onClick={() => addToCart(product, count)} whileTap={{ scale: 0.9 }}>
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;