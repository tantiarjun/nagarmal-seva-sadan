import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Icon from "../../../assets/Reviews/icon.png";
import logo from "../../../assets/Home/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <a href="/" className="footer-logos">
            <img src={logo} alt="Logo" className="footer-logo" />
            <span className="hospital-name">Nagarmal Modi Seva Sadan</span>
          </a>
          <p>
            Providing exceptional care with a team of highly experienced doctors
            and specialists. Your health, our priority.
          </p>
          <div className="socials">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <div className="hline"></div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/coe">Centre Of Excellence</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe</h2>
          <form action="#">
            <input type="email" name="email" placeholder="Email address" />
            <div className="mailbutton" type="submit">
              <img src={Icon} alt="Icon" />
            </div>
          </form>
          <p>
            Subscribe to our newsletter to stay updated! We care for our
            patients.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2024 All rights reserved | Designed And Developed by
          <span className="bold">beenaIT Solutions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
