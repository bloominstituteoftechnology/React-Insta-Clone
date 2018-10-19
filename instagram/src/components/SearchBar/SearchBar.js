import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="left-wrapper">
        <i className="fas fa-camera-retro fa-2x" />
        <div className="insta-logo"> Instagram</div>
      </div>
      <form>
        <input type="text" placeholder="&#x1f50d; &nbsp;Search" />
      </form>

      <i className="far fa-compass fa-2x " />
      <i className="far fa-heart fa-2x" />
      <i className="far fa-user-circle fa-2x" />
    </div>
  );
};

export default SearchBar;

//logo image needs to be placed in image-wrapper <div>
 