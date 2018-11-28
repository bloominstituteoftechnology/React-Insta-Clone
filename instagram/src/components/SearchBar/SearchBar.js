import React from "react";

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