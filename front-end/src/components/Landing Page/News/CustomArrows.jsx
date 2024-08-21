import React from "react";
import {
  BiSolidCaretLeftCircle,
  BiSolidCaretRightCircle,
} from "react-icons/bi";

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", left: "-25px", zIndex: 1 }}
    onClick={onClick}
  >
    <BiSolidCaretLeftCircle size={24} />
  </div>
);

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", right: "-25px", zIndex: 1 }}
    onClick={onClick}
  >
    <BiSolidCaretRightCircle size={24} />
  </div>
);

export { PrevArrow, NextArrow };
