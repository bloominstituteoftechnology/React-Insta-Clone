import React from 'react';
import {
  SearchBarDiv,
  SearchInput,
  SearchBarContainer,
  LogoDiv,
  NavDiv,
} from './SearchBarStyles';

const SearchBar = (props) => {
  return (
    <SearchBarDiv>
      <SearchBarContainer>
        <LogoDiv>
          <img src="../../instagramsprites1" alt="" />
        </LogoDiv>
        <form onSubmit={props.search}>
          <SearchInput
            type="text"
            placeholder="Search"
            onChange={props.changeHandler}
            value={props.text}
          />
        </form>
        <NavDiv>
          <button onClick={props.logout}>Logout</button>
        </NavDiv>
      </SearchBarContainer>
    </SearchBarDiv>
  );
};

export default SearchBar;
