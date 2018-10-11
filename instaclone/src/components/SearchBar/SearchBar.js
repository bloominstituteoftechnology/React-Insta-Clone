import React from "react";
import PropTypes from "prop-types";
import {
  SearchDiv,
  SearchLogoDiv,
  SearchIconDiv,
  SearchInput,
  I
} from "./Styles";

const SearchBar = props => {
  return (
    <SearchDiv>
      <SearchLogoDiv>
        <i className="fab fa-instagram"> | Instagram</i>
      </SearchLogoDiv>
      <SearchInput
        type="text"
        name="search"
        value={props.search}
        onChange={props.onInputChange}
        placeholder="Search"
      />
      <SearchIconDiv className="">
        <I className="far fa-compass" />
        <I className="far fa-heart" />
        <I className="far fa-user" onClick={props.handleLogOut} />
      </SearchIconDiv>
    </SearchDiv>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func
};

export default SearchBar;
