import React, { Component } from "react";
import "./SearchBar.css";


function SearchBar(props) {
  return (
    <div className="header">

      <div className="header__logo">
        <a href="https://www.instagram.com/">
          <img src="https://i.imgur.com/4wdX7zL.jpg" />
        </a>
      </div>

      <div className="header__searchbar">
        <form>
          <input className="header__searchbar--styling" type="text" placeholder="Search"/>
        </form>
      </div>

      <div className="header__buttons">
        <a href="https://www.instagram.com/">
          <img src="https://i.imgur.com/IjXkxAg.jpg" />
        </a>
      </div>

    </div>
    )
}

export default SearchBar;