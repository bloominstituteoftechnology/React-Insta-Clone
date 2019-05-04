import React from "react";
import IGLogo from "../../assets/iglogo.png";
import "./SearchBar.css";
import {
  StyledsearchBarWrapper,
  StyledimageWrapper,
  Styledlogoimage,
  StyledsocialWrapper,Styledsocialdiv
} from "../Styled";

const SearchBar = props => {
  return (
    <StyledsearchBarWrapper>
      <StyledimageWrapper>
        <Styledlogoimage alt="instagram logo" src={IGLogo} />
      </StyledimageWrapper>
      <div>
        {/* Insert an input field and call the SearchPosts method on the constructor. */}
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <StyledsocialWrapper>
        <Styledsocialdiv>
          <i className="far fa-compass" />
        </Styledsocialdiv>
        <Styledsocialdiv>
          <i className="far fa-heart" />
        </Styledsocialdiv>
        <Styledsocialdiv>
          <i className="far fa-user-circle" />
        </Styledsocialdiv>
      </StyledsocialWrapper>
    </StyledsearchBarWrapper>
  );
};

export default SearchBar;
