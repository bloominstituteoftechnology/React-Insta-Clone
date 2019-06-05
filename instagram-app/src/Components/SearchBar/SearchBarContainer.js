import React from 'react';
import './SearchBar.css';
import { FaCompass, FaHeart, FaUserAlt } from 'react-icons/fa';

const SearchBar = props => {
    return (
      <div className="search-wrapper">
        <div className="img-wrapper">
          <img alt="instagram logo" src='https://image.flaticon.com/icons/png/512/87/87390.png' className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
        </div>
        <div className="icon-wrapper">
          <div className="social">
            <FaCompass />
          </div>
          <div className="social">
            <FaHeart />
          </div>
          <div className="social">
            <FaUserAlt />
          </div>
        </div>
      </div>
    );
  };

  export default SearchBar;