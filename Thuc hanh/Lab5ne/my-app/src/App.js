// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import { ChatRoom as ChatData } from './chat'; // Sửa import để sử dụng named import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatRoom chatroom={ChatData} />} /> {/* Chuyển prop */}
      </Routes>
    </Router>
  );
};

export default App;