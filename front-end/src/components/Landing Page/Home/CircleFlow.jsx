// CircleFlow.js
import React from "react";
import styled, { keyframes } from "styled-components";
import babyImage from "../../../assets/Home/baby_image.png";
import childImage from "../../../assets/Home/child_image.png";
import adultImage from "../../../assets/Home/adult_image.png";
import elderlyImage from "../../../assets/Home/elderly_image.png";


const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const CircleContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  animation: ${rotate} 10s linear infinite;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &:nth-child(2) {
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &:nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;

  &:nth-child(5) {
    top: 0;
    left: 75%;
    transform: translateX(-50%);
  }
  &:nth-child(6) {
    top: 75%;
    left: 100%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(7) {
    bottom: 0;
    left: 75%;
    transform: translateX(-50%);
  }
  &:nth-child(8) {
    top: 75%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 25px solid blue;

  &:nth-child(5) {
    transform: rotate(90deg);
  }
  &:nth-child(6) {
    transform: rotate(180deg);
  }
  &:nth-child(7) {
    transform: rotate(270deg);
  }
  &:nth-child(8) {
    transform: rotate(0deg);
  }
`;

const CircleFlow = () => {
  return (
    <CircleContainer>
      <ImageContainer>
        <Image src={babyImage} alt="Baby" />
      </ImageContainer>
      <ImageContainer>
        <Image src={childImage} alt="Child" />
      </ImageContainer>
      <ImageContainer>
        <Image src={adultImage} alt="Adult" />
      </ImageContainer>
      <ImageContainer>
        <Image src={elderlyImage} alt="Elderly" />
      </ImageContainer>

      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </CircleContainer>
  );
};

export default CircleFlow;
