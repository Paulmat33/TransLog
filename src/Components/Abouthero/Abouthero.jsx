import { Link } from "react-router-dom";
import "./Abouthero.css";
import React, { useState } from "react";
import Twitter from "../../assets/Twitter.png";
import Facebook from "../../assets/Facebook.png";
import Linkdin from "../../assets/Linkdin.png";

const Abouthero = () => {
  return (
    <div className="abouthero">
      <div className="navhead container ">
        <ul className="navbar-menu">
          <li>
            <Link className="bord" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="bord active " to="/about">
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
        </ul>
        <div className="social-icon1">
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
          <img src={Linkdin} alt="" />
        </div>
        <button className="btn5"> Request Quote</button>
      </div>
      <div className="about container">
        <h4>About Us</h4>
        <h1>About Our Logistics</h1>
      </div>
    </div>
  );
};
export default Abouthero;
