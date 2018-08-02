import React from "react";
import "./SearchBar.css";
import cam from "../../assets/instagram-brands.svg";
import textLogo from "../../assets/insta-text-logo.svg";
import styles from "styled-components"

const Header = styles.header`
border-bottom: 1px solid #3333;
height: 80px;
background: #ffffff;
position: fixed;
width: 100vw;
top: 0;
`;


// input field should be refactored eventually into its own component

const SearchBar = props => {
  return (
    <Header>
      <div className="container">
        <div className="search-bar">
          <div className="image-group">
            <img alt="instagram camera" src={cam} className="logo-image" />
            <img
              alt="instagram logo"
              src={textLogo}
              className="logo-image text-logo"
            />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
          </div>
          <div className="social-group">
             <span className="header-icon"><i className="far fa-compass icon"></i></span>
             <span className="header-icon"><i className="far fa-heart"></i></span>
             <span className="header-icon"><i className="far fa-user-circle"></i></span>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default SearchBar;
