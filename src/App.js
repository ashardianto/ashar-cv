import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
