import React, { useState } from "react";
import "../styles/VoiceSearch.css";
import { FaMicrophone } from "react-icons/fa";

const VoiceSearch = ({ onSearch }) => {
  const [isListening, setIsListening] = useState(false);
  
  const startListening = () => {
    setIsListening(true);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onSearch(transcript);
      setIsListening(false);
    };
    recognition.start();
  };

  return (
    <div className="voice-search-container">
      <button onClick={startListening} className={`voice-btn ${isListening ? "listening" : ""}`}>
        <FaMicrophone /> {isListening ? "Listening..." : "Search by Voice"}
      </button>
    </div>
  );
};

export default VoiceSearch;