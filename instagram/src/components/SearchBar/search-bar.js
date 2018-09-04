import React from 'react';

const SearchBar = props => {
  return(
    <div>
      <form>
      <input placeholder='search' value={props.inputText} onChange={props.handleInput} />
      </form>
    </div>
  );

};

export default SearchBar;