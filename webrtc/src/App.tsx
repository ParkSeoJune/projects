import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Chatting from "./Chatting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/chatting" element={<Chatting />} />
      </Routes>
    </Router>
  );
}

export default App;
