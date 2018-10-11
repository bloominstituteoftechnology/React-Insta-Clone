import React from "react";
import "./SearchBar.css";
import styled, { css } from "styled-components";

const SearchBarDiv = styled.div`


`;
const SearchBarWrapper = styled.div`
  /* border: 3px solid blue; */
  display: flex;
`;

const SearchBar = props => {
  return (
    <SearchBarDiv>
      <SearchBarWrapper>
        <div className="logo">
          <i class="fab fa-instagram " />
          Instagram{" "}
        </div>
        <div>
          {" "}
          <input type="text" placeholder="Search" />{" "}
        </div>
        <div className="icons">
          <div className="social-wrapper">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user-circle" />
          </div>
        </div>
      </SearchBarWrapper>
      <button onClick={() => props.handleCreds(null)}>Logout</button>

    </SearchBarDiv>
  );
};

export default SearchBar;
