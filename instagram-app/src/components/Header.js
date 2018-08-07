import React from '../../node_modules/react';
import './css/Header.css';



const Header = () => {
    return (
      <header>
        <div>
          <i class="fab fa-instagram"></i>
        </div>
        <img class="bigInsta" alt="instagram logo" src="https://jennpirri.files.wordpress.com/2013/05/instagram-logo.png"></img>
        <div class="search">
        <i class="fas fa-search"></i>
          <input type="text" class="search-input" id="search-input" placeholder="Search"></input>
        </div>
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </header>
    )
  }

  export default Header;