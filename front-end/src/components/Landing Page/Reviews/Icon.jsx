import React from 'react';
import leftArrowImg from '../../../assets/Reviews/back.png'; // Correct path to your left arrow image
import rightArrowImg from '../../../assets/Reviews/next.png'; // Correct path to your right arrow image

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <img src={rightArrowImg} alt="Next" style={{ width: '30px', height: '30px' }} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <img src={leftArrowImg} alt="Previous" style={{ width: '30px', height: '30px' }} />
        </div>
    );
};

const CustomDots = ({ onClick, active, index, totalDots }) => {
    return (
      <li style={{
          display: 'inline-block',
          margin: '0 12px', 
      }}>
        <button
          onClick={onClick}
          style={{
            width: active ? '41px' : '13px',
            height: '13px',
            borderRadius: '100px',
            backgroundColor: active ? '#083B46' : '#4FC9E0',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            margin: active ? '0 0px' : '0 12px', 
          }}
        >
        </button>
      </li>
    );
};





export { NextArrow, PrevArrow, CustomDots};
