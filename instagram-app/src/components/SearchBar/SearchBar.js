import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
`;

const LogoAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 35%;
  align-items: center;
`;

const SearchBarContainer = styled.input`
  justify-content: center;
  margin-left: 10%;
  font-size: 1.5rem;
  font-family: "Oswald", sans-serif;
  border: 1px solid black;
`;

const IconWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
`;

// My logout function
const LogOut = () => {
  localStorage.removeItem('username');
  window.location.reload();
};

const SearchBar = props => {
  return (
    <HeaderContainer>
      <LogoAndTitleWrapper>
        <i className="fab fa-instagram" />

        <h2>Dollygram</h2>
      </LogoAndTitleWrapper>

      <SearchBarContainer
        type="text"
        name="search"
        placeholder="...Search"
        onKeyDown={props.searchPosts}
      />

      <IconWrapper>
        <i className="fas fa-map-marker-alt" />
        <i className="far fa-heart" />
        <i class="fas fa-sign-out-alt" onClick={LogOut}/>
      </IconWrapper>
    </HeaderContainer>
  );
};

export default SearchBar;
