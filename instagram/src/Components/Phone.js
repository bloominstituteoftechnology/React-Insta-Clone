import styled from 'styled-components';
import React from 'react';

const PhoneFrame = styled.div`
  padding: 1rem;
  padding-bottom: 40px;
  margin: 2rem;
  display: inline-block;
  background-color: #212121;
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const PhoneScreen = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  position: relative;
  margin: 0 auto;
  background: #fff;
  clip-path: url(#clipping);
`;

const PhoneSpeaker = styled.div`
  display: inline-block;
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100px;
  width: ${props => props.width};
  height: 5px;
  background-color: #ababab;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.7);
`;

const FrontCamera = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #111;
  position: absolute;
  top: 20px;
  transform: translate(-50%, -50%);
  left: calc(50% ${props => props.left ? '-' : '+'} 40px);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:15px;
    height: 15px;
    background-image: radial-gradient(closest-corner at 40% 60%, #4a4a4a, #222);
    background-position: 50% 50%;
    border-radius: 50%;
  }
`;

const Phone = ({ children }) => (
  <PhoneFrame>
    <svg style={{ position: 'fixed' }}>
  <clipPath id="clipping" clipPathUnits="objectBoundingBox">
    <path d="M0.06451612903 0, h0.2258064516, q0.03225806452 0 0.03225806452 0.02678571429, q0 0.02678571429 0.03225806452 0.02678571429, h0.2903225806, q0.03225806452 0 0.03225806452 -0.02678571429, q0 -0.02678571429 0.03225806452 -0.02678571429, h0.2258064516, q0.06451612903 0 0.06451612903 0.05357142857, v0.8928571429, q0 0.05357142857 -0.06451612903 0.05357142857, h-0.8709677419, q-0.06451612903 0 -0.06451612903 -0.05357142857, v-0.8928571429, q0 -0.05357142857 0.06451612903 -0.05357142857 z" />
  </clipPath>
</svg>
    <PhoneSpeaker top="20px" width="40px" bottom="auto"/>
    <FrontCamera left/>
    <FrontCamera />
    <PhoneScreen width="310px" height="560px">
      {children}
    </PhoneScreen>
    <PhoneSpeaker top="auto" width="80px" bottom="15px"/>
  </PhoneFrame>
);

export default Phone;
