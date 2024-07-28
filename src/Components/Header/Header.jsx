import "./Header.css";
import logo from "../../assets/Logo.png";
import Phone from "../../assets/Phone-icon.png";
import Email from "../../assets/Email-icon.png";
import Time from "../../assets/Time-icon.png";
import Twitter from "../../assets/Twitter.png";
import Linkdin from "../../assets/Linkdin.png";
import Facebook from "../../assets/Facebook.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const  [showNav, setShowNav] = useState(false)
  const handleClick = () => {
    setShowNav(prev => !prev)
  }

  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="" />
        <svg onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffffff"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <nav className="nav-bar">
      {showNav &&  <ul>
          <li>
            <Link className="bord active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="bord " to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="bord " to="/pages">
              Pages
            </Link>
          </li>
          <li>
            <Link className="bord " to="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className="bord " to="/contact">
              Contact
            </Link>
          </li>
        </ul>}
      </nav>
      <div className="icon">
        <div className="header-2">
          <img src={Time} alt="" />
          <p>
            Mon - Sat 9.00 - 18.00
            <br /> Sunday Closed
          </p>
        </div>

        <div className="header-2">
          <img src={Email} alt="" />
          <p>Email contact@logistics.com</p>
        </div>

        <div className="header-2">
          <img src={Phone} alt="" />
          <p>
            Call Us <br />
            (00) 112 365 489
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
