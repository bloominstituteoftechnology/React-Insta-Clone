import React from 'react';

// components
import { SearchBarLogo } from './SearchBarLogo';
import { Input } from '../misc/Input';

export const SearchBarContainer = () => {
  return (
    <div className="searchbar-container">
      <SearchBarLogo />
      <Input />
    </div>
  );
};