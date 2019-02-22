import React from "react";
import PropTypes from "prop-types";

import "../SearchBar/searchbar.css";
import { StyledHeader } from "../Styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ searchHandler, search }) => {
  return (
    <StyledHeader>
      <nav>
        <div className="leftIcons">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="3x"
            className="instagramLogo"
          />
          <img
            src={require("../../imgs/line.png")}
            alt="line"
            className="line"
          />
          <img
            src={require("../../imgs/iglogo.png")}
            alt="Instagram text logo"
            className="instagramTextLogo"
          />
        </div>
        <form className="search-form">
          <input
            type="text"
            placeholder="search user..."
            className="searchBarInput"
            onChange={event => searchHandler(event)}
            value={search}
            name="search"
            autoComplete="off"
          />
        </form>
        <div className="rightIcons">
          <FontAwesomeIcon icon={["far", "compass"]} size="3x" />
          <FontAwesomeIcon icon={["far", "heart"]} size="3x" />
          <FontAwesomeIcon icon={["far", "user"]} size="3x" />
        </div>
      </nav>
    </StyledHeader>
  );
};

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchBar;
