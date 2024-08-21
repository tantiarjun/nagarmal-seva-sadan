import React from "react";
import "./GalleryCard.css";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({ title, image, country, news_title, news_brief }) => {
  return (
    <div className="news_card">
      <img src={image} alt={title} />
      <div className="card-body">
        <p className="country">{country}</p>
        <h1 className="news_title">{news_title}</h1>
        <p className="news_brief">{news_brief}</p>
        {/* <a href="#" className="know-more">Know More  <FaArrowRight /> </a> */}
      </div>
    </div>
  );
};

export default Card;
