import React from "react";
import "../styles/TestimonialsSection.css";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Alice M.", feedback: "The honey is absolutely pure and delicious! Perfect for my morning tea.", image: "../assets/user1.jpg" },
    { name: "John D.", feedback: "The dairy products are always fresh and rich in taste. Highly recommended!", image: "../assets/user2.jpg" },
    { name: "Emma K.", feedback: "Sustainable farming practices make me love their products even more!", image: "../assets/user3.jpg" },
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;