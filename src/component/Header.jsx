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
          backgroundColor: "skyblue",
          color: "white",
          position: "sticky",
          top: "0",
          zIndex: "100",
          fontFamily: "'Courier New', Courier",
        }}
      >
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecorationLine: "none" }}
        >
          <li style={{ listStyleType: "none" }}>Home</li>
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecorationLine: "none" }}
        >
          <li style={{ listStyleType: "none" }}>About</li>
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecorationLine: "none" }}
        >
          <li style={{ listStyleType: "none" }}>Contact</li>
        </NavLink>
        <NavLink
          to='/Poetry'
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecorationLine: "none" }}
        >
          <li style={{ listStyleType: "none" }}>Poetry</li>
        </NavLink>
        <NavLink
          to='/Project'
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecorationLine: "none" }}
        >
          <li style={{ listStyleType: "none" }}>Project</li>
        </NavLink>
      </ul>
    </div>
  );
}
