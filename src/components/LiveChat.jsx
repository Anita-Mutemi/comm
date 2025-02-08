import React, { useState } from "react";
import "../styles/LiveChat.css";
import { motion } from "framer-motion";

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "How can I assist you today?", sender: "support" }]);
      }, 1000);
    }
  };

  return (
    <motion.div className="live-chat-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Live Chat Support</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </motion.div>
  );
};

export default LiveChat;