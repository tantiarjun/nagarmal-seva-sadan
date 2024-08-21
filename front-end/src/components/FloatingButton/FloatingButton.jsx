import React, { useState, useRef, useEffect } from "react";
import "./FloatingButton.css";
import FormWidget from "./FormWidget";
import Gif from "../../assets/FloatingButton/response.gif";
import Icon from "../../assets/FloatingButton/float.png";

const FloatingButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
    setIsFormOpen(false);
    setTimeout(() => setIsSubmitted(false), 10000); // Hide overlay after 10 seconds
  };

  const handleCloseOverlay = () => {
    setIsSubmitted(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "overlay") {
      handleCloseOverlay();
    }
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setIsFormOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={`floating-button ${isFormOpen ? "open" : ""}`}
        onClick={handleButtonClick}
      >
        <div className="label">Contact Us</div>
        <div className="icon">
          <img src={Icon} alt="Contact Us" />
        </div>
      </div>
      {isFormOpen && (
        <div className="overlay">
          <div className="form-widgets" ref={formRef}>
            <FormWidget
              onSubmit={handleFormSubmit}
              onClose={() => setIsFormOpen(false)}
            />
          </div>
        </div>
      )}
      {isSubmitted && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-content">
            <button className="close-button" onClick={handleCloseOverlay}>
              &times;
            </button>
            <div className="success-gif">
              <img src={Gif} alt="Response recorded" />
            </div>
            <div className="success-message">Thank You!</div>
            <div className="success-description">
              Your response has been recorded. We will get back to you shortly.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
