import React from 'react';
import Logo from '../IG-assets/IGLogo.svg';

const SearchBarContainer = () => {
    return (
        <div className="search-bar-wrapper">
          <div className="image-wrapper">
            <img alt="instagram logo" src={Logo} className="logo-image" />
          </div>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="social-wrapper">
            <div className="social">
              <i className="fa fa-compass" />
            </div>
            <div className="social">
              <i className="fa fa-heart" />
            </div>
            <div className="social">
              <i className="fa fa-user-circle" />
            </div>
          </div>
        </div>
      );
    };
    
    export default SearchBarContainer;