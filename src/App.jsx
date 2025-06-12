import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usercontext from "./component/Usercontext";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import Poetry from "./component/Poetry/Poetry";
import Project from "./component/Project/Project";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Poetry' element={<Poetry />} />
        <Route path='/Project' element={<Project />} />
      </Routes>

      <Usercontext.Provider value={{ NAME: "rude" }}>
        <Footer />
      </Usercontext.Provider>
    </Router>
  );
};

export default App;
