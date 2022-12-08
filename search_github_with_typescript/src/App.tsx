import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Result from "./pages/Result";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/profile" element={<Result />} />
    </Routes>
  );
}

export default App;
