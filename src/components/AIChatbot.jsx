import React, { useState } from "react";
import "../styles/AIChatbot.css";
import { FaRobot } from "react-icons/fa";

const AIChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "How can I assist you?", user: false }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <h3><FaRobot /> AI Chatbot</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? "user-msg" : "bot-msg"}>{msg.text}</div>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AIChatbot;