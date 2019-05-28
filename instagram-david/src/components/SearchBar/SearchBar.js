import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  SearchContainer,
  SearchItemContainer,
  SearchHeading,
  LogoIcon,
  MainHeading,
  SearchInput,
  SearchActionContainer,
  SearchActionIcon,
  LogoutIcon
} from "./SearchBarStyles.js";

const SearchBar = props => {
  return (
    <SearchContainer>
      <SearchItemContainer>
        <SearchHeading>
          <LogoIcon className="fab fa-instagram fa-3x" />
          <MainHeading>Instagram</MainHeading>
        </SearchHeading>
        <SearchInput
          type="text"
          placeholder="Search Posts"
          onChange={props.onChange}
          name="searchValue"
          value={props.value}
        />
        <SearchActionContainer>
          <SearchActionIcon className="far fa-compass fa-2x" />
          <SearchActionIcon className="far fa-heart fa-2x" />
          <LogoutIcon className="far fa-user fa-2x" onClick={props.logout} />
        </SearchActionContainer>
      </SearchItemContainer>
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  logout: PropTypes.func
};
export default SearchBar;
