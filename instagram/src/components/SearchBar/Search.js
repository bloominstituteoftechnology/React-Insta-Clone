import React, { Component } from 'react';
import logo from "../../images/logo.png";
import instagram from"../../images/instagram.png";
import explore from"../../images/explore.png";
import heart from"../../images/heart.png";
import user from"../../images/user.png";
import'./Search.css';

class Search extends Component {
  state = {  }
  render() { 
    return (  
      <div className="container">
        <div className="search-container">
          <div className="search-header">
           <div className="main-logo">
              <img src={logo} alt="logo"/>
           </div>
            <div className="logo">
             <img src={instagram} alt="instagram"/>
            </div>
          </div>
          <div className="search-bar">
           <input type="text" placeholder="search"/>
          </div>
          <div className="search-menu">
            <img src={explore} alt="explore"/>
            <img src={heart} alt="explore"/>
            <img src={user} alt="explore"/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Search;