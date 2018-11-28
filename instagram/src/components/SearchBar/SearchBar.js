import React from "react";
import CameraIcon from "../Icons/CameraIcon";
import CompassIcon from "../Icons/CompassIcon";
import HeartIcon from "../Icons/HeartIcon";
import SearchIcon from "../Icons/SearchIcon";
import UserIcon from "../Icons/UserIcon";
import LogoType from "../Icons/LogoType";
import { WrapperDiv, StyledInput, ContainerDiv } from "../Styles";

import PropTypes from "prop-types";


const SearchBar = props => {
  return (
    <WrapperDiv searchBar>
      <ContainerDiv logo className='logo'>
        <CameraIcon />
        <LogoType />
      </ContainerDiv>
      <ContainerDiv search>
        <SearchIcon />
        <StyledInput
          type="text"
          name="search"
          value={props.input}
          onChange={props.handleSearch}
          placeholder="Search"
        />
      </ContainerDiv>
      <ContainerDiv icons>
        <CompassIcon />
        <HeartIcon />
        <UserIcon />
      </ContainerDiv>
    </WrapperDiv>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string
};

export default SearchBar;