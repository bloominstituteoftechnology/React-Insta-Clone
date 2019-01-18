import React from "react";
import igLogo from "./img/insta-logo.png";
import "./SearchBar.css";
import styled from "styled-components";

const Search = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 2rem;
  padding-top: 1rem;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6%;
`;

const IgLogo = styled.img`
  height: 3.8rem;
  width: 10.3rem;
`;

const Line = styled.div`
    background-color: #262626;
    height: 30px;
    margin: 0 16px;
    width: 1px;
`;

const InputWrap = styled.div`
height: 2.8rem;
`;


const SearchBar = props => {
  return (
    // <div className="search-bar">
    <Search>
      <Left>
        <i className="fab fa-instagram" />
        <Line className="line" />
        <IgLogo src={igLogo} alt="insta logo" />
      </Left>
      <InputWrap>
        <input
          className="input-box"
          onKeyDown={props.searchPosts}
          type="text"
          placeholder="       🔍 Search"
        />
      </InputWrap>
      <div className="search-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </Search>
    
  );
};

export default SearchBar;
