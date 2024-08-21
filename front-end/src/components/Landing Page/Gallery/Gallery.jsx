// Gallery.js
import React from "react";
import "./Gallery.css";
import Button from "../../Button/Button";
import news from "../../../assets/Gallery/g1.png";
import news2 from "../../../assets/Gallery/g2.png";
import news3 from "../../../assets/Gallery/g3.png";
import news4 from "../../../assets/Gallery/g4.png";
import Card from "../../News Gallery/Gallery Card/GalleryCard";
import Slider from "react-slick";
import {
  BiSolidCaretLeftCircle,
  BiSolidCaretRightCircle,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Gallery = () => {
  const newsData = [
    {
      image: news,
    },
    {
      image: news2,
    },
    {
      image: news3,
    },
    {
      image: news4,
    },
  ];

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
    slidesToShow: 4,
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
          slidesToShow: 4,
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
    <section className="gallery">
      <div className="gallery-heading">
        <h6>Gallery</h6>
        <h1>Captured Moment</h1>
        <h5>The Heartbeat of Our Hospital in Images</h5>
      </div>
      <Slider {...settings} className="gallery-slider">
        {newsData.map((news, index) => (
          <Card
            key={index}
            // title={news.title}
            image={news.image}
            // news_title={news.news_title}
            // news_brief={news.news_brief}
          />
        ))}
      </Slider>
      <div className="explore-more">
        {/* <Button text="Explore More" type="secondary" /> */}
        <Link to="/newsgallery">
          <Button text="Explore More" type="secondary" />
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
