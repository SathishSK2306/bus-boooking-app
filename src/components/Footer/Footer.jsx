import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BusEase</h3>
            <p>
              Your trusted partner for bus ticket bookings across the country.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/booking">Book Tickets</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Bus Street,
                Bloomington
              </li>
              <li>
                <i className="fas fa-phone"></i> +1 234 567 890
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@busease.com
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BusEase. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
