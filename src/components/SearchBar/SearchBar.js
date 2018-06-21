import React from 'react';
import styled from "styled-components";
import './SearchBar.css'

let logOutUser = e => {
  localStorage.removeItem("user");
  localStorage.removeItem("password")
  window.location.reload();
}

const SearchWrapper = styled.div`
    border-bottom: 1px solid #3333;
    height: 80px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
`;



const SearchBar = props => {
  return (
    <SearchWrapper>
      <div className="image-wrapper">
        <img alt="instagram logo" src="https://rawgit.com/LambdaSchool/React-Insta-Clone/115c6b9b980fa9acc57494680a9d5951f9f35ee1/instagram/src/assets/iglogo.png" className="logo-image" />
      </div>
      <div>
        <input type="text" className="search-bar" placeholder="Search"  />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass fa-2x" />
        </div>
        <div className="social">
          <i className="far fa-heart fa-2x" />
        </div>
        <div className="social">
          <i className="far fa-user-circle fa-2x" onClick={logOutUser} />
        </div>
      </div>
    </SearchWrapper>
  );
};

export default SearchBar;
