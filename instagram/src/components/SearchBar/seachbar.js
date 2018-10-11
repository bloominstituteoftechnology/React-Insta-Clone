import React from "react";
import iglogo from "../../img/iglogo.png";
import instacamera from "../../img/instacamera.png";
// import "./SearchBar.css";
import {
  InstaHeader,
  CamLogo,
  CameraPic,
  InstaLogo,
  SearchBarInput,
  AllIcons,
  Icons
} from "./SearchBarStyles";

const SearchBar = props => {
  return (
    <InstaHeader>
      <CamLogo>
        <CameraPic alt="instagram camera" src={instacamera} />
        <h2>|</h2>
        <InstaLogo alt="instagram logo" src={iglogo} />
      </CamLogo>
      <SearchBarInput
        placeholder="search"
        type="text"
        className="search-bar"
        name="searchTarget"
        onChange={props.changeHandle}
        value={props.searchPost}
      />
      <AllIcons>
        <Icons>
          <i className="fa fa-compass" />
        </Icons>
        <Icons>
          <i className="fa fa-heart-o" />
        </Icons>
        <Icons>
          <i className="fa fa-user-o" />
        </Icons>
      </AllIcons>
    </InstaHeader>
  );
};

export default SearchBar;
