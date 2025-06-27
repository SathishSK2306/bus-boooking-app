import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/public/images/logo.png" alt="" />
            {/* <span>YesBusGo</span> */}
          </Link>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/booking">Book Tickets</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
