import React from "react";
import "./SearchBar.css";

const searchBar = props => {
  return (
    <div className="srch-container">
      <i className="fa fa-compass" aria-hidden="true" />
      <h2 className="title"> naazagram </h2>
      <form>
        <input placeholder="Search" />
      </form>
      <i className="fa fa-compass" aria-hidden="true" />
      <i className="fa fa-compass" aria-hidden="true" />
      <i className="fa fa-compass" aria-hidden="true" />
    </div>
  );
};

export default searchBar;
