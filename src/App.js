import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tvs from "./pages/Tvs";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tvs" element={<Tvs />} />
    </Routes>
    </div>
  );
}

export default App;