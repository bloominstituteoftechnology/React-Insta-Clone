import React from "react";
import "./SearchBar.css";
import {
  Heart,
  Compass,
  Instagram,
  User,
  Search,
  Xcircle
} from "../../assets/assets";
import {InstaboxDiv, InstatitleDiv, SearchInput} from '../styleComponents'

const SearchBar = props => {
  return (
    <div className="fixed-header">
      <InstaboxDiv>
        <Instagram />

        <InstatitleDiv>
          Instagram
        </InstatitleDiv>
      </InstaboxDiv>
      <div className="search">
        <Search searchFocus={props.searchFocus} />
        <Xcircle searchFocus={props.searchFocus} searchBlur={props.searchBlur} />
        <SearchInput
          type="text"
          placeholder="Search"
          searchFocus={props.searchFocus}
          onFocus={props.searchFocusHandler}
          onChange={props.searchHandler}
          value={props.searchInput}
        />
      </div>
      <div className="icons">
        <Compass />
        <Heart />
        <User />
      </div>
    </div>
  );
};

export default SearchBar;
