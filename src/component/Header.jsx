import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          backgroundColor: "#111",
          color: "white",
          position: "sticky",
          top: "0",
          zIndex: "100",
        }}
      >
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
        <NavLink
          to='/Poetry'
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Poetry</li>
        </NavLink>
        <NavLink
          to='/Project'
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Project</li>
        </NavLink>
      </ul>
    </div>
  );
}
