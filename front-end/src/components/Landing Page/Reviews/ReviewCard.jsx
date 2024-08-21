import React from 'react';
import './ReviewCard.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewCard = ({ image, rating, name, date, review }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    return (
        <div className='review-card'>
            <img src={image} alt="reviewer" />
            <div className="rating">
                <div className="star-rating">
                  {Array(fullStars).fill(<FaStar color="gold" />)}
                  {halfStar && <FaStarHalfAlt color="gold" />}
                  {Array(emptyStars).fill(<FaRegStar color="gold" />)}
                </div>
                <div className="point-rating">
                  {rating}/5
                </div>
            </div>
            <div className="review-content">
                <h2>{name}</h2>
                <p>{date}</p>
                <p className='review-text'>{review}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
