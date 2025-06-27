import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../Auth/AuthModal";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openLogin = () => {
    setIsLogin(true);
    setAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const openRegister = () => {
    setIsLogin(false);
    setAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src="/images/logo.png" alt="YesBusGo Logo" />
            </Link>

            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/booking" onClick={closeMenu}>
                Book Tickets
              </Link>
              <Link to="/bustracking" onClick={closeMenu}>
                Live Tracking
              </Link>
              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>

              <div className="auth-buttons">
                <button className="btn btn-login" onClick={openLogin}>
                  Login
                </button>
                <button className="btn btn-primary" onClick={openRegister}>
                  Register
                </button>
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

      {authModalOpen && (
        <AuthModal isLogin={isLogin} onClose={() => setAuthModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
