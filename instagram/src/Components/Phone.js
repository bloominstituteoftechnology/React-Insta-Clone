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
`;

const PhoneScreen = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  position: relative;
  margin: 0 auto;
  background: #fff;
  clip-path: url(#clipping);
`;

const Phone = ({ children }) => (
  <PhoneFrame>
    <svg style={{ position: 'fixed' }}>
  <clipPath id="clipping" clipPathUnits="objectBoundingBox">
    <path d="M0.06451612903 0, h0.2258064516, q0.03225806452 0 0.03225806452 0.02678571429, q0 0.02678571429 0.03225806452 0.02678571429, h0.2903225806, q0.03225806452 0 0.03225806452 -0.02678571429, q0 -0.02678571429 0.03225806452 -0.02678571429, h0.2258064516, q0.06451612903 0 0.06451612903 0.05357142857, v0.8928571429, q0 0.05357142857 -0.06451612903 0.05357142857, h-0.8709677419, q-0.06451612903 0 -0.06451612903 -0.05357142857, v-0.8928571429, q0 -0.05357142857 0.06451612903 -0.05357142857 z" />
  </clipPath>
</svg>
    <PhoneScreen width="310px" height="560px">
      {children}
    </PhoneScreen>
  </PhoneFrame>
);

export default Phone;
