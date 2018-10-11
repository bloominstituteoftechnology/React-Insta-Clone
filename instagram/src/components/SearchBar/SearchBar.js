import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  border-bottom: 1px solid black;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1010px;
  margin: 20px auto;
`;

const Logos = styled.div`
  height: 50px;
  img {
    height: 100%;
  }
`;

const CameraLogo = styled.img`
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid gray;
`;

const SearchText = styled.div`
  display: flex;
  align-items: center;
  input {
    height: 28px;
    width: 215px;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }
  svg {
    position: relative;
    z-index: 3;
    color: gray;
    right: -85px;
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    margin: 30px;
  }
`;

const SearchBar = props => (
  <StyledSearchBar>
    <Logos>
      <CameraLogo
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-glyph-logo-icon-png-black-white-300x300.png"
        alt="camera logo"
      />
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png-768x221.png"
        alt="instagram text logo"
        className="text-logo"
      />
    </Logos>
    <SearchText>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ height: "10px", width: "10px" }}
      />
      <input
        type="text"
        name="search bar"
        placeholder="Search"
        onKeyDown={props.handleSearch}
      />
    </SearchText>
    <Icons>
      <FontAwesomeIcon
        icon={faCompass}
        style={{ height: "30px", width: "30px" }}
      />
      <FontAwesomeIcon
        icon={faHeart}
        style={{ height: "30px", width: "30px" }}
      />
      <FontAwesomeIcon
        icon={faUser}
        style={{ height: "30px", width: "30px", cursor: "pointer" }}
        onClick={props.showLogout}
      />
    </Icons>
  </StyledSearchBar>
);

export default SearchBar;
