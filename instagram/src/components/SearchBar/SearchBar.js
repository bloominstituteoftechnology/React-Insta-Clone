import React from "react";
import CameraImg from "../Imgs/CameraImg";
import CompassImg from "../Imgs/CompassImg";
import HeartImg from "../Imgs/HeartImg";
import SearchImg from "../Imgs/SearchImg";
import UserImg from "../Imgs/UserImg";
import LogoType from "../Imgs/LogoImg";
import {WrapperDiv, InputStyles, ContainerDiv} from "../Styles";

import PropTypes from "prop-types";


const SearchBar = props => {
  return (
    <WrapperDiv searchBar>
      <ContainerDiv logo className='logo'>
        <CameraImg />
        <LogoType />
      </ContainerDiv>
      <ContainerDiv search>
        <SearchImg />
        <InputStyles
          type="text"
          name="search"
          value={props.input}
          onChange={props.handleSearch}
          placeholder="Search"
        />
      </ContainerDiv>
      <ContainerDiv Imgs>
        <CompassImg />
        <HeartImg />
        <UserImg />
      </ContainerDiv>
    </WrapperDiv>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string
};

export default SearchBar;