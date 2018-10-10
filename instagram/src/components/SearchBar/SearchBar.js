import React from "react";

const SearchBar = props => {
  return (
    <div className="search">
      <div className="search-left">
        <i className="fa fa-instagram fa-2x" />
        <p className="line">|</p>
        <p className="insta-border"> Instagram</p>
      </div>
      <input
        placeholder="Search"
        type="text"
        className="search-input"
        value={props.filterTarget}
        onChange={props.changeHandler}
        name="filterTarget"
      />
      <div className="right-icons">
        <i className="fa fa-compass fa-2x" />
        <i className="fa fa-heart fa-2x" />
        <i className="fa fa-user fa-2x" />
      </div>
    </div>
  );
};

export default SearchBar;
