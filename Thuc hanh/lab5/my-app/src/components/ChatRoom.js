// src/components/ChatRoom.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm';

const ChatRoom = ({ chatroom }) => {
  const [messages, setMessages] = useState(chatroom.messages);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="container">
      <h2>{chatroom.name}</h2>
      <ul className="list-group">
        {messages.map(message => (
          <li key={message.id} className="list-group-item">
            <strong>{message.senderId}: </strong>{message.text}
          </li>
        ))}
      </ul>
      <MessageForm addMessage={addMessage} />
    </div>
  );
};

ChatRoom.propTypes = {
  chatroom: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatRoom;