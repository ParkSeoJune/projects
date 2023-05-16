import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Chatting from "./Chatting";
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/chattings/:uid" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
