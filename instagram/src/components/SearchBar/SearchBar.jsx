import React from "react";

const SearchBar = () => {
  return (
    <div className="row search-bar d-flex justify-content-start align-items-center">
      <i className="fab fa-instagram col-1 insta-icon" />
      {/* <img
        className="instagram-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        alt=""
      /> */}
      <form className="col-8">
        <input placeholder="search" type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
