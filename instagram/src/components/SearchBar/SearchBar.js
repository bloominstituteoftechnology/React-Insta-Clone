import React from "react";
import IGLogo from "../../assets/IG-Logo.png";
import "./SearchBar.css";
import styled, { css } from "styled-components";

const SearchBarDiv = styled.div`
  border: 3px solid red;
`;
const SearchBarWrapper = styled.div`
  border: 3px solid blue;
  display: flex;`


const SearchBar = props => {
  return (
    <SearchBarDiv>
      <SearchBarWrapper>
        <div className="image-wrapper">
          <img alt="instagram logo" src={IGLogo} className="logo-image" />
        </div>
        </SearchBarWrapper>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="far fa-compass" />
          </div>
          <div className="social">
            <i className="far fa-heart" />
          </div>
          <div className="social">
            <i className="far fa-user-circle" />
          </div>
        </div>
        <button onClick={() => props.handleCreds(null)}>LOGOUT!!!</button>
        </SearchBarDiv>
      </div>
  );
};

export default SearchBar;
