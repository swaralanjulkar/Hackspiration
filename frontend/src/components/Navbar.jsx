import React from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "./images/final_logo-removebg-preview.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark shadow p-2 mb-5 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" className="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#service-com">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourteam">
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contact">
                  Contact-Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
