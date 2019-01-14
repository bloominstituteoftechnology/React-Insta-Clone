import React from "react";
import SearchBar from "./SearchBar";

function SearchBarContainer() {
  return (
    <div>
      <img src={require(`./Images/largeCamera.png`)} alt="" />
      <img src={require(`./Images/largeInstagram.png`)} alt="" />
      <SearchBar />
      <img src={require(`./Images/largeCompass.png`)} alt="" />
      <img src={require(`./Images/largeHeart.png`)} alt="" />
      <img src={require(`./Images/largePerson.png`)} alt="" />
    </div>
  );
}

export default SearchBarContainer;
