import React from "react";
import "./SearchBar.css";
import logo from "./../../logo.png";
const searchBar = props => {
  return (
    <div className="container-header">
      <div className="left-icons scaled">
        <a href="https://www.instagram.com">
          <i class="fab fa-instagram" />
          <span className="line scaled"> | </span>
          <span className="insta">Instagram </span>
        </a>
      </div>

      <div>
        <form className="search-container ">
          <input
            className="fa fa-input search-input"
            placeholder="&#xf002; Search"
          />
        </form>
      </div>

      <div className="head-icons scaled">
        <div>
          <i className="far fa-compass" aria-hidden="true" />
        </div>
        <div>
          <i className="far fa-heart" aria-hidden="true" />
        </div>
        <div>
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default searchBar;
