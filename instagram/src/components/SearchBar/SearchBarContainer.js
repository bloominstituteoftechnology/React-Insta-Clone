import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';
import './SearchBar.css';



const SearchBar = props => {

  const SearchBarWrapper = styled.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;



  return (
    <SearchBarWrapper>
      <div className="image-wrapper">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
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
    </SearchBarWrapper>
  );
};

export default SearchBar;
