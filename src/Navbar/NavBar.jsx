import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.jpg";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-changed">
        <div className="container-fluid">
          <img src={logo} alt="" className="logo" />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 right">
              <li className="nav-item ">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" class="nav-link" aria-current="page">
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/developers" class="nav-link" aria-current="page">
                  Developers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
