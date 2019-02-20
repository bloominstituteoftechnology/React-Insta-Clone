import React from 'react';
import styled, { keyframes } from 'styled-components';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: block;
  animation: 16s ${fade} ease-in infinite;
  animation-delay: ${props => (props.delay * 4) + 's' };
`;

const FadeCarousel = () => (
  <CarouselContainer>
    <CarouselImage delay={0} src={img1} alt="" />
    <CarouselImage delay={1} src={img2} alt="" />
    <CarouselImage delay={2} src={img3} alt="" />
    <CarouselImage delay={3} src={img4} alt="" />
  </CarouselContainer>
);

export default FadeCarousel;