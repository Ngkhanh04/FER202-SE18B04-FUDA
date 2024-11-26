// src/components/MessageForm.js
import React, { useState } from 'react';

const MessageForm = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: `message${Date.now()}`, // Tạo ID duy nhất
      text: message,
      senderId: 'user1',
      timestamp: new Date().toLocaleString(),
    };

    addMessage(newMessage); // Gọi hàm addMessage từ ChatRoom
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;