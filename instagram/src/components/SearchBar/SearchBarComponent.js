import React, { Component } from 'react';
import { FaInstagram,FaSearch, FaHeart,FaComment,FaUserCircle,FaCompass  } from 'react-icons/fa';
import './search.css';
import istaImag from '../img/Instagram_logo.png';


class SearchBarComponent extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="logobox">
          <FaInstagram  className="SearchBar"/>
          <img src={istaImag} className="imglogo"/>
        </div>
        
          <div className="inputSeachBox" >
          <input ></input>
          <button className="searchBtnBox">
            <FaSearch className="Fasearch"/>
            <h5>Search</h5>
          </button>
          </div>
         
       
        <div className="mediaIconbox">
          <FaCompass />
          <FaHeart  className="FaHeart"/>
          <FaComment  className="FaComment"/>
          <FaUserCircle className="FaUserCircle"/>
        </div>
      </div>
    );
  }
}

export default SearchBarComponent ;
