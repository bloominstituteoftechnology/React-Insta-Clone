import React from "react";
import SearchBar from "./SearchBar";
import "./Search.css";
function SearchBarContainer(props) {
  return (
    <div className="header-container">
      <div className="search-container1">
        <img
          src={require(`./Images/largeCamera.png`)}
          alt=""
          className="largeCamera"
        />
        <img
          src={require(`./Images/largeInstagram.png`)}
          alt=""
          className="largeInstagram"
        />
      </div>
      <SearchBar
        inputSearch={props.inputSearch}
        handleChange={props.handleChange}
      />
      <div className="search-container2">
        <img
          src={require(`./Images/largeCompass.png`)}
          alt=""
          className="largeCompass"
        />
        <img
          src={require(`./Images/largeHeart.png`)}
          alt=""
          className="largeHeart"
        />
        <img
          src={require(`./Images/largePerson.png`)}
          alt=""
          className="largePerson"
        />
      </div>
    </div>
  );
}

export default SearchBarContainer;
