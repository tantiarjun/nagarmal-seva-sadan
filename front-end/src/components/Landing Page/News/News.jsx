import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
import img1 from "../../../assets/News/news1.png";
import img2 from "../../../assets/News/news2.png";
import img3 from "../../../assets/News/news3.png";
import {
  BiSolidCaretLeftCircle,
  BiSolidCaretRightCircle,
} from "react-icons/bi";
import { Link } from "react-router-dom";

function News() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const NextArrow = ({ className, style, onClick }) => (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BiSolidCaretRightCircle />
    </div>
  );

  // Custom Prev Arrow
  const PrevArrow = ({ className, style, onClick }) => (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BiSolidCaretLeftCircle />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 1,
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
    <section className="news">
      <h6>News</h6>
      <h1>Breaking News!</h1>
      <h5>Health & Wellness Bulletin: Our Hospital in the Headlines</h5>

      <Slider {...settings} className="news-columns">
        <div className="news-content">
          <img src={img1} alt="news" />
          <div className="news-info">
            <h2>NMMS, Ranchi celebrated Breastfeeding Day on Monday</h2>
            <p>
              Breastfeeding provides essential nutrients and strengthens the
              bond between mother and child. It’s vital for boosting immunity,
              promoting healthy growth, and ensuring a strong start in life. Our
              event featured informative sessions.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="news-content">
          <img src={img2} alt="news" />
          <div className="news-info">
            <h2>NMMS, Ranchi celebrated Doctor's Day yesterday</h2>
            <p>
              The day began with an inspiring keynote address highlighting the
              critical role doctors play in our lives. This was followed by a
              series of engaging activities, including interactive sessions and
              a panel discussion featuring renowned healthcare experts.
              Attendees shared personal stories.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="news-content">
          <img src={img3} alt="news" />
          <div className="news-info">
            <h2>NMMS, Ranchi celebrated Breastfeeding Day on Monday</h2>
            <p>
              On Monday, NMMS Ranchi marked Breastfeeding Day with a heartfelt
              and informative event aimed at promoting the importance of
              breastfeeding for both mothers and infants. This special day
              highlighted the numerous benefits of breastfeeding.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </Slider>

      <div className="view-all-container">
        {/* <button className="view-all-news">View All</button> */}
        <Link to="/news" className="view-all-news">
          View All
        </Link>
      </div>
    </section>
  );
}

export default News;
