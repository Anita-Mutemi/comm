import React, { useState } from "react";
import "../styles/Categories.css";

const categoriesData = [
  "Raw Honey", "Organic Honey", "Infused Honey", "Manuka Honey", "Royal Jelly",
  "Honeycomb", "Bee Pollen", "Propolis", "Milk", "Goat Milk",
  "Almond Milk", "Dairy Butter", "Cheese", "Yogurt", "Ghee"
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = categoriesData.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="categories-section">
      <h2>Explore Our Categories</h2>
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
      <div className="categories-grid">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className={`category-card ${selectedCategory === category ? "selected" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      {selectedCategory && (
        <p className="category-info">You selected: {selectedCategory}</p>
      )}
    </section>
  );
};

export default Categories;