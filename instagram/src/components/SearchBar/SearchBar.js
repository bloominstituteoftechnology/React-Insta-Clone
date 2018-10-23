import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const InstaLogo = styled.div`
  font-family: Grand Hotel;
  font-size: 3rem;
`;
const SearchBar = () => {
  return (
    <Header>
      <LeftWrapper>
        <i className="fas fa-camera-retro fa-2x" />
        <InstaLogo> Instagram</InstaLogo>
      </LeftWrapper>
      <form>
        <input type="text" placeholder="&#x1f50d; &nbsp;Search" />
      </form>

      <i className="far fa-compass fa-2x " />
      <i className="far fa-heart fa-2x" />
      <i className="far fa-user-circle fa-2x" />
    </Header>
  );
};

export default SearchBar;

//logo image needs to be placed in image-wrapper <div>
