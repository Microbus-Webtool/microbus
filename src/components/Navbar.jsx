import React from 'react';
import { useState, NavLink } from "react";
import "../styles/navbar.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );

  return (
    <div>

      <nav className="navbar">
        <div className="container">

          <div className="logo">
              <img src="/assets/micro_logo_black.png" alt="Logo" />
          </div>

          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to ="#about" smooth> About </Link></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/workshops">Workshop</a></li>
              <li><a href="/teams">Team</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="content">
        {/* <!-- Your main content goes here --> */}
      </div>
    </div>
  );
}

export default Navbar;