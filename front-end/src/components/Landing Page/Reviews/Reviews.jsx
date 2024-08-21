import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";
import img from "../../../assets/Reviews/user.png";
import Button from "../../Button/Button";
import { NextArrow, PrevArrow, CustomDots } from "./Icon";

const Reviews = () => {
  const reviews = [
    {
      image: img,
      rating: 4.5,
      name: "Shampyari Devi",
      date: "2 months ago",
      review:
        "I want to share my heartfelt gratitude and express that for us, Seva Sadan is not just a hospital but a temple. Dr. Sunil is like a god to us because he saved my mother's life. We are incredibly thankful for the care we received. Dr. Sunil was very polite, helpful, and took excellent care of my mother. We stayed at the hospital for 1 month and 5 days, utilizing the Ayushman Bharat scheme, and we were not charged a single rupee. I also want to mention that the hospital is clean, and all the staff members are very supportive and kind.",
    },
    {
      image: img,
      rating: 4.0,
      name: "Rajesh Nayak",
      date: "1.5 months ago",
      review: "I was suffering from a severe case of jaundice and was in a critical condition. Initially, I went to Narayani Hospital, but they said there was nothing they could do. My wife and brother then took me to Seva Sadan Hospital, where I underwent an MRI. Despite my dire situation, Dr. Krishan accepted me as a patient when no one else would. To me, Dr. Krishan is nothing short of a godsend, and I am incredibly thankful to him. The entire staff, including the nurses and other doctors, were very supportive throughout my treatment. My family has a deep connection with Seva Sadan Hospital. My father recovered here, and my mother was also saved by the care she received. For us, Seva Sadan is more than just a hospital—it's like family. I am eternally grateful for everything they've done for me and my loved ones.",
    },
    {
      image: img,
      rating: 4.2,
      name: "Shambhu",
      date: "3 months ago",
      review:
        "I had a road accident after attending a wedding and was unconscious. Initially taken to another hospital, where doctors suggested ventilator support, I was then transferred to Seva Sadan Hospital under Dr. Krishan's care. I experienced chest pain, and Dr. Krishan performed an operation. Now fully recovered, I am extremely grateful. My family and I chose Seva Sadan Hospital because of our previous experience and trust in the doctors.",
    },
    {
      image: img,
      rating: 4.3,
      name: "Krishna",
      date: "15 days ago",
      review: "I experienced difficulty breathing while walking, but I recovered upon arriving at Seva Sadan, where Dr. Krishan attended to me. I stayed in the hospital for 8-10 days, and now I’m fully recovered. The doctor and nurses provided excellent care throughout my stay.  ",
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <ul style={{ position: "absolute", bottom: "-50px" }}>
        {" "}
        {/* Adjust positioning as needed */}
        {dots.map((dot, index) => (
          <CustomDots
            key={index}
            active={dot.props.className.includes("slick-active")}
            onClick={dot.props.onClick}
            index={index}
          />
        ))}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews">
      <div className="review-heading">
        <h6>Reviews</h6>
        <h1>Read What Our Patients Are Saying</h1>
        <h5>
          Discover firsthand experiences from our patients about the exceptional
          care they received at our hospital. Their stories highlight our
          commitment to providing top-notch medical treatment, compassionate
          service, and cutting-edge technology. See how our dedicated team has
          made a difference in the lives of those we serv
        </h5>
      </div>
      <div className="review-cards">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Slider>
      </div>{" "}
      <div className="view-all-container">
        <Button text="Write Review" type="secondary" />
      </div>
    </section>
  );
};

export default Reviews;
