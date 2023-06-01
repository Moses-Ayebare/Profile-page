import React from "react";
import logo from "../components/Logo.png"
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" width={100} height={40}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav  ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MoMo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              WiFi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
