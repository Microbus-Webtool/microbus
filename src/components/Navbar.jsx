import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="/assets/micro_logo_black.png" alt="Logo" />
            </Link>
          </div>

          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src="/assets/menu.svg" alt="Hamburger Menu" width="35" height="35" />
          </div>

          <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active" onClick={handleShowNavbar}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" activeClassName="active" onClick={handleShowNavbar}>
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/workshops" activeClassName="active" onClick={handleShowNavbar}>
                  Workshop
                </NavLink>
              </li>
              <li>
                <NavLink to="/teams" activeClassName="active" onClick={handleShowNavbar}>
                  Team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content">{/* Your main content goes here */}</div>
    </div>
  );
};

export default Navbar;
