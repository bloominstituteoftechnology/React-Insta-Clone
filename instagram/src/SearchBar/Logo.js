import React, { Component } from "react";
import styled from "styled-components";
import Image from '../ReusableStyle';
const LogoImg = styled.img`
  padding: 0 10px;
  border-right: black solid 1px;
  margin-right: 5px;
`;
const Logo = prop => {
  return (
    <div>
      <LogoImg
        className="logo"
        src="https://image.ibb.co/ktv7UU/logo.png"
        alt="logo"
      />
      <Image
        src="https://image.ibb.co/fENAip/Instagram_text.png"
        alt="Instagram_text"
      />
    </div>
  );
};
export default Logo;
