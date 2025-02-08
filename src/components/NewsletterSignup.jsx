import React, { useState } from "react";
import "../styles/NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p className="success-message">Thank you for subscribing!</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSignup;