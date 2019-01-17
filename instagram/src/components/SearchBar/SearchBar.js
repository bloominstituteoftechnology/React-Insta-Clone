/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const styledSearchBar = css`
  width: 220px;
  height: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SearchBar = props => {
  return (
    <form className="search">
      <input
        css={styledSearchBar}
        value={props.inputSearch}
        placeholder="🔍 Search"
        name="inputSearch"
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchBar;
