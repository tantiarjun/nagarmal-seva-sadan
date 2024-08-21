import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/Home/logo.png";
import call from "../../../assets/Home/Call.svg";
import facebook from "../../../assets/Home/Link.svg";
import google from "../../../assets/Home/Link (2).svg";
import { navItems } from "./NavItems";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import SecondConsultModal from "./SecondConsultModal";
import { FaArrowRightLong } from "react-icons/fa6";
import FlyoutLink from "./FlyoutLink";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", () => {
      if (window.innerWidth <= 1024 && isActive) {
        setIsActive(false);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => {
        if (window.innerWidth <= 1024 && isActive) {
          setIsActive(false);
        }
      });
    };
  }, [isActive]);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const SocialLinks = () => (
    <div className="navbar-heading-links">
      <img src={facebook} alt="Facebook" className="facebook-img" />
      <img src={google} alt="Google" className="google-img" />
    </div>
  );

  const Logo = () => (
    <a href="/" className="nmss-logo">
      <img src={logo} alt="Logo" className="logo-img" />
    </a>
  );

  const DoctorContent = () => (
    <div className="doctor-nav">
      <ul className="doc-nav-options">
        <li>Cardiology</li>
        <li>Medicine</li>
        <li>Gastroenterology</li>
        <li>ENT</li>
      </ul>
      <ul className="doc-nav-options">
        <li>Urology</li>
        <li>Eye</li>
        <li>Dental</li>
        <li>Gynaecology</li>
      </ul>
      <ul className="doc-nav-options">
        <li>Surgery</li>
        <li>Skin</li>
        <li>Orthopaedic</li>
        <li>Nephrology</li>
      </ul>
    </div>
  );

  return (
    <div className="main-navbar">
      <div className="navbar-heading">
        <div>
          <SocialLinks />
        </div>
        <div className="navbar-second-consult">
          <div className="content-wrapper">
            <h2>Unsure about your diagnosis? Get a second opinion now!</h2>
            <Link to="#" className="second-consult" onClick={openModal}>
              <div className="Arrow">
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex textAdress">
          <div className="flex w-location">
            <div className="location">
              <IoLocationSharp />
            </div>
            <span>
              Seva Sadan Path, Upper Bazar, Ranchi, Jharkhand 834001, India
            </span>
          </div>
          <div className="flex-column ">
            <div className="flex">
              <FaPhoneAlt />
              <span>+91 62047 52640</span>
            </div>
            <div className="flex">
              <IoMailSharp />
              <span>sevasadan7@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="home-navbar">
        <div className={`nav-links ${isActive ? "active" : ""}`}>
          <Logo />
          <ul className="nav-item-list">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.flyout ? (
                  <FlyoutLink href={item.path} content={DoctorContent}>
                    {item.title}
                  </FlyoutLink>
                ) : (
                  <Link to={item.path} className="nav-item">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-toggle" onClick={toggleNav}>
          <Logo />
          {isActive ? (
            <FaTimes className="bars-img" />
          ) : (
            <FaBars className="bars-img" />
          )}
        </div>
      </nav>
      <SecondConsultModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
