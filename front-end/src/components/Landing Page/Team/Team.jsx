import React, { useState, useEffect } from "react";
import "./Team.css";
import DoctorCard from "../../Doctors Page/Doctor Card/DoctorCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {
  BiSolidCaretLeftCircle,
  BiSolidCaretRightCircle,
} from "react-icons/bi";

function Team() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [doctors, setDoctors] = useState([]);
  const [input, setInput] = useState('');

  // Fetch doctors from the server
  useEffect(() => {
    axios.get('http://localhost:3000/doctors')
          .then((response) => {
              setDoctors(response.data);
          })
          .catch((error) => {
              setError(error);
          });
  }, []); 

  const handleNextClick = () => {
    setSelectedOption((prevOption) => (prevOption + 1) % 6);
  };

  const handlePrevClick = () => {
    setSelectedOption((prevOption) => (prevOption - 1 + 6) % 6);
  };

  const NextArrow = ({ className, style, onClick }) => (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BiSolidCaretRightCircle />
    </div>
  ); 

  const PrevArrow = ({ className, style, onClick }) => (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BiSolidCaretLeftCircle />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="team">
      <h1 className="team_h">Doctors</h1>
      <h1 className="team-heading"> OUR EXPERT TEAM OF DOCTORS </h1>
      <p className="team-text">
        Our esteemed Center of Excellence delivers unparalleled, cutting-edge
        treatment across a range of medical conditions while providing unmatched
        top-tier expertise and state-of-the-art technology.
      </p>

      <nav className="team-navbar space_between pr-10">
        <ul className="nav-menu">
          {[
            "DENTISTRY",
            "ORTHOPAEDIATRICS",
            "NEPHROLOGIST",
            "GYNECOLOGIST",
            "PHYSICIAN",
            "GENERAL SURGEON",
          ].map((item, index) => (
            <li
              className={`nav-item ${
                index === selectedOption ? "visible" : "hidden"
              }`}
              key={index}
            >
              <a
                href="#"
                className={selectedOption === index ? "clicked" : ""}
                onClick={() => setSelectedOption(index)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="nexticon" onClick={handleNextClick}>
          <BiSolidCaretRightCircle />
        </div>
      </nav>

      <Slider {...settings}>
        {doctors.map((doctor, index) => (
            <DoctorCard
                doctorImage={doctor.image}
                doctorName={doctor.name}
                doctorUnit={doctor.unit}
                doctorExperience={doctor.profile.experience}
                doctorDescription={doctor.description}
                docProfileID={doctor._id}
            />
        ))}
      </Slider>
    </div>
  );
}

export default Team;
