import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav--ul">
          <li className="nav-li nav--edu">
            <a href="#section-city">Education</a>
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
            <a href="#section-intro">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
