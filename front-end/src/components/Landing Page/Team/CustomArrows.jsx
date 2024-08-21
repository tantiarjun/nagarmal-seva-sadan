// CustomArrows.js
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "#083b46" }}
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block", color: "#083b46" }}
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);
