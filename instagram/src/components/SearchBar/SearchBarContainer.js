import React from 'react';
import ImageContainer from './ImageContainer';
import SearchBar from './SearchBar';
import ButtonContainer from './ButtonContainer';

const SearchBarContainer = props => {
  return (
    <div>
      <ImageContainer />
      <SearchBar />
      <ButtonContainer />
    </div>
  );
};

export default SearchBarContainer;
