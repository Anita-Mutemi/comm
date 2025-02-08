import React from "react";
import "../styles/BlogSection.css";

const BlogSection = () => {
  const blogPosts = [
    { id: 1, title: "The Benefits of Organic Honey", excerpt: "Discover the health benefits of consuming organic honey and how it boosts immunity.", image: "../assets/blog-honey.jpg" },
    { id: 2, title: "Why Fresh Dairy Matters", excerpt: "Learn why fresh dairy products are essential for a healthy lifestyle.", image: "../assets/blog-dairy.jpg" },
    { id: 3, title: "Sustainable Beekeeping Practices", excerpt: "Explore eco-friendly beekeeping methods and their impact on the environment.", image: "../assets/blog-beekeeping.jpg" },
  ];

  return (
    <section className="blog-section">
      <h2>Latest News & Articles</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;