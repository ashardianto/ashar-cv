import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav--ul">
          <li className="nav-li nav--edu">
            {/* <a href="#section-city">Home</a> */}
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-li nav--skill">
            <a href="#section-todo">Skill</a>
          </li>
          <li className="nav-li nav--exp">
            <a href="#experience--list">Experience</a>
          </li>
          <li className="nav-li nav--contact">
            <a href="#section-contact">Contact</a>
          </li>
          <li className="nav-li nav--about">
            {/* <a href="#section-intro">About</a> */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
