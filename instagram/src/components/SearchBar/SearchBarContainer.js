import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div>
      <div>
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div>
        <div>
          <i/>
        </div>
        <div className="social">
          <i/>
        </div>
        <div className="social">
          <i/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;