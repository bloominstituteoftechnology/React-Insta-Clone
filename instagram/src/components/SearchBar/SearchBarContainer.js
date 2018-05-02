import React from 'react';

// components
import { SearchBarLogo } from './SearchBarLogo';
import { SearchBar } from './SearchBar';

export const SearchBarContainer = () => {
  return (
    <div className="searchbar-container">
      <SearchBarLogo />
      <SearchBar />
    </div>
  );
};