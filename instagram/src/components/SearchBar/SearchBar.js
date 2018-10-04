import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput';
import SearchBarActions from './SearchBarActions';

const SearchBar = props => {
  return (
    <>
      <SearchBarLogo />
      <SearchBarInput />
      <SearchBarActions />
    </>
  );
}

export default SearchBar;
