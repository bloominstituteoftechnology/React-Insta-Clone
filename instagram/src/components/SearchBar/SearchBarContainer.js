import React from "react";
import "./Searchbar.css";
import logo from "../Images/instagramScript.svg";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1.4rem;
  align-items: center;
`;

const SearchBar = styled.input`
  font-family: "Font Awesome 5 Free", "Open Sans", sans-serif;
  text-align: center;
  width: 12rem;
  font-size: 0.8rem;
  padding: 0.2rem 0;
  margin-left: 5rem;
`;

const LeftContainer = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 6.5rem;
  position: absolute;
  margin-left: 1.1rem;
  top: 5px;
  cursor: pointer;
`;

const SearchBarContainer = props => {
  console.log("SEARCHPROPS", props);

  return (
    <Header>
      <Container>
        <LeftContainer>
          <i className="fab fa-instagram" />
          <Logo src={logo} alt="instagram script logo" />
        </LeftContainer>
        <div>
          <SearchBar
            name="search"
            type="text"
            onChange={props.searchPosts}
            className="fa fa-input"
            placeholder="&#xf002; Search"
          />
        </div>
        <div className="searchbar-right">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" onClick={props.logout} />
        </div>
      </Container>
    </Header>
  );
};

export default SearchBarContainer;
