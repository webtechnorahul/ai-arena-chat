import React, { useState } from "react";

const ChatInput = ({aifunction,setmessage}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;
    setmessage(message);
    aifunction(message); // yaha API call kar sakte ho

    setMessage(""); // clear input
  };

  return (
    <div className="chat-wrapper">
      <form className="chat-container" onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Send a message..."
          className="chat-input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="chat-actions">
          <span className="emoji">😊</span>

          <button type="submit" className="send-btn">
            ➤
          </button>
        </div>

      </form>
    </div>
  );
};

export default ChatInput;