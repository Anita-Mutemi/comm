import React, { useState } from "react";
import "../styles/AIPoweredChatbot.css";

const AIPoweredChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm finding the best answer for you!", sender: "bot" }]);
      }, 1000);
    }
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <h3>AI Chatbot Assistant</h3>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default AIPoweredChatbot;