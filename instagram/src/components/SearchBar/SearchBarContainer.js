import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import {StyledsearchBarWrapper} from '../Styled'

const SearchBar = props => {
  return (
    <StyledsearchBarWrapper>
      <div className="image-wrapper">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        {/* Insert an input field and call the SearchPosts method on the constructor. */}
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
    </StyledsearchBarWrapper>
  );
};

export default SearchBar;
