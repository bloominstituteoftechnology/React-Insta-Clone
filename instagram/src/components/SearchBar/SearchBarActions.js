import React from 'react';
import './SearchBar.css';
import SearchBarActionsExploreButton from './SearchBarActionsExploreButton';
import SearchBarActionsActivityButton from './SearchBarActionsActivityButton';
import SearchBarActionsProfileButton from './SearchBarActionsProfileButton';

const SearchBarActions = (props) => {
  return(
    <div className="search-bar-actions">
      <SearchBarActionsExploreButton />
      <SearchBarActionsActivityButton />
      <SearchBarActionsProfileButton />
    </div>
  );
};

export default SearchBarActions;