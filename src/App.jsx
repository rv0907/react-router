import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/component/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header /> {/* Always visible */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer /> {/* Always visible */}
    </Router>
  );
}

export default App;
