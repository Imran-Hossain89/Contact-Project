import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src="image/logo.png" />
        <ul className="nav-list">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
}
