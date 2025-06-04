import React from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
export default function Header() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div className='header'>
        <ul>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
