import React from 'react';

export const SearchBar = props => {
  return (
    <input
      className="searchbar-container__input"
      value={ props.inputValue }
      onChange={ props.handleInputValueChange }
    />
  );
}