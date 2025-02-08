import React, { useState } from "react";
import "../styles/FAQSection.css";

const FAQSection = () => {
  const faqs = [
    { question: "What are the benefits of organic honey?", answer: "Organic honey is packed with antioxidants, supports digestion, and boosts immunity." },
    { question: "How should I store dairy products?", answer: "Keep dairy products refrigerated at or below 4°C to maintain freshness and prevent spoilage." },
    { question: "Is your honey raw and unprocessed?", answer: "Yes, our honey is 100% raw, unprocessed, and free from additives." },
    { question: "Do you offer bulk purchasing options?", answer: "Yes, we provide bulk purchasing for both honey and dairy products. Contact us for pricing." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <p className={activeIndex === index ? "faq-answer show" : "faq-answer"}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;