import React from "react";
import IGLogo from "../../assets/iglogo.png";
import IGCamera from "../../assets/instagram-brands.svg";
import Compass from "../../assets/compass-regular.svg";
import User from "../../assets/user-regular.svg";
import heart from "../../assets/heart-regular.svg";
import {
  SearchWrapper,
  SearchImageWrapper,
  SearchImage,
  SearchInput
} from "./SearchBarStyles";

const SearchBar = props => {
  return (
    <SearchWrapper>
      <SearchImageWrapper image>
        <SearchImage logo src={IGLogo} />
        <SearchImage camera src={IGCamera} />
      </SearchImageWrapper>
      <div>
        <SearchInput
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </div>
      <SearchImageWrapper social>
        <div>
          <SearchImage compass alt="compass" src={Compass} />
        </div>
        <div className="social">
          <SearchImage heart alt="heart" src={heart} />
        </div>
        <div>
          <SearchImage user src={User} alt="User logo" />
        </div>
      </SearchImageWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
