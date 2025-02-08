import React, { useState } from "react";
import "../styles/Reviews.css";
import { motion } from "framer-motion";

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = () => {
    if (newReview.trim() && rating > 0) {
      setReviews([...reviews, { text: newReview, rating }]);
      setNewReview("");
      setRating(0);
    }
  };

  return (
    <motion.div className="reviews-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Customer Reviews</h2>
      <div className="review-form">
        <textarea
          placeholder="Write a review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value="0">Select Rating</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <button onClick={handleReviewSubmit}>Submit</button>
      </div>
      <div className="reviews-list">
        {reviews.length === 0 ? <p>No reviews yet.</p> : reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p>{review.text}</p>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;
