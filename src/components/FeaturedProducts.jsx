import React from "react";
import "../styles/FeaturedProducts.css";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Organic Honey", price: "$10", image: "../assets/honey.jpg" },
    { id: 2, name: "Fresh Milk", price: "$5", image: "../assets/milk.jpg" },
    { id: 3, name: "Honey Butter", price: "$8", image: "../assets/honey-butter.jpg" },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedProducts;