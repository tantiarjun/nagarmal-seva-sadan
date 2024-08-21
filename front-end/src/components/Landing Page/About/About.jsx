import React from "react";
import "./About.css";
import Group3 from "../../../assets/About/Group3.png";
import image6 from "../../../assets/About/image6.png";
import image7 from "../../../assets/About/image7.png";
import image8 from "../../../assets/About/image8.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="main ">
      <div className="About">
        <div className="about-container">
          <img src={Group3} alt="teeth" className="image"></img>
        </div>
        <div className="about-content">
          <h1 className="aboutHead">ABOUT US</h1>
          <h1 className="about-tag">
            Affordable Care, Accurate Treatment, Respectful Behavior
          </h1>
          <p className="about-text">
            Founded in 1958, Nagarmal Modi Seva Sadan  hospital has been a
            beacon of healthcare excellence for over six decades. With over 200+
            beds, we provide comprehensive care through a unique blend of
            advanced medical skills, state-of-the-art diagnostic and therapeutic
            equipment, and a commitment to best practices and processes.
          </p>
          {/* <div className="learnMore">Learn More </div> */}
          <Link to="/about" className="learnMore">
            Learn More
          </Link>
        </div>
      </div>

      {/* <div className="cards">
        <div className="card">
          <img src={image6} alt="logo" className="logo"></img>
          <div>
            <p className="text2">
              Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et.
              Curabitur consectetur auctor leo .
            </p>
          </div>
        </div>

        <div className="card">
          <img src={image7} alt="logo" className="logo"></img>
          <div>
            <p className="text2">
              Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et.
              Curabitur consectetur auctor leo .
            </p>
          </div>
        </div>

        <div className="card">
          <img src={image8} alt="logo" className="logo"></img>
          <div>
            <p className="text2">
              Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et.
              Curabitur consectetur auctor leo .
            </p>
          </div>
        </div> 
      </div> */}
    </div>
  );
}

export default About;
