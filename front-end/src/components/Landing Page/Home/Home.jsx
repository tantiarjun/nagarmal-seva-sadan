import React from "react";
import "./Home.css";
import image from "../../../assets/Home/Hero Image.png";
import usp1 from "../../../assets/Home/usp1.svg";
import usp2 from "../../../assets/Home/usp2.svg";
import usp3 from "../../../assets/Home/usp3.svg";
import Button from "../../Button/Button";
import CircleFlow from "./CircleFlow";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <h1 className="head1">Welcome to </h1>
        <h1 className="head2">Nagarmal Modi Seva Sadan- Care For Life</h1>
        <div className="home-main2 w-100">
          <div className="hero-image w-32 ">
            <img src={image} alt="Happy patient" />
            {/* <CircleFlow /> */}
          </div>
 
          <div className="home-content w-32">
            <h1>Your Smile, Our Mission</h1>
            <p>
              If your health is not where you want it to be, then you should be
              coming to us! We care about your well-being. Our hospital, with a
              compassionate touch, offers gentle and effective care for all
              stages of life
            </p>
            <div className="home-buttons">
              {/* <Button text="Book an Appointment" type="primary" />
              <Button text="Browse our service" type="secondary" /> */}
              <Link to="/commingsoon">
                <Button text="Book an Appointment" type="primary" />
              </Link>
              <Link to="/coe">
                <Button text="Browse our service" type="secondary" />
              </Link>
            </div>

            <div className="usp">
              <div className="usp_box">
                <div>
                  <img src={usp1} alt="usp1" />
                </div>
                <div className="uspP">24/7 Emergency Services</div>
              </div>

              <div className="usp_box">
                <div>
                  <img src={usp2} alt="usp1" />
                </div>
                <div className="uspP">Affordable Care</div>
              </div>

              <div className="usp_box">
                <div>
                  <img src={usp3} alt="usp1" />
                </div>
                <div className="uspP">Complete Healthcare Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
