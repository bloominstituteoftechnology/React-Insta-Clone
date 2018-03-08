import React from "react";

const SearchBar = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit} onChange={props.onChange}>
        <input id="search-input" type="text" />
        <button class="reset-button" type="button" onClick={props.onClick}>
          Reset Search
        </button>
      </form>
      <div className="search-container">
        <div className="search-text">Search</div>
        <img
          className="search-icon"
          src="http://www.clker.com/cliparts/z/1/T/u/9/2/search-icon-hi.png"
          alt="search icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
