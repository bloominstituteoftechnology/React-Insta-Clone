import React from 'react';
import ImageContainer from './ImageContainer';
import ButtonContainer from './ButtonContainer';
import './SearchBar.css';

const SearchBarContainer = props => {
  return (
    <div className='search-container'>
      <div className='search-bar-container'>
        <ImageContainer />
        <form>
          <input placeholder='Search'/>
        </form>
        <ButtonContainer />
      </div>
    </div>
  );
};

export default SearchBarContainer;
