import React, { Component } from "react";
import styled from "styled-components";
import Image from '../ReusableStyle';
const NavigationDiv = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Navigation = prop => {
  return (
    <NavigationDiv>
      <Image src="https://image.ibb.co/mrx5jU/mail.png" alt="mail" />
      <Image
        className="heart"
        src="https://image.ibb.co/etjUB9/heart.png"
        alt="heart"
      />
      <Image src="https://image.ibb.co/gyWnyp/person.png" alt="person" />
    </NavigationDiv>
  );
};
export default Navigation;
