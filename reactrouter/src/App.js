import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}
