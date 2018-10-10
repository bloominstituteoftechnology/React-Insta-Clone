import React from 'react';

const SearchBar = (props) => {
  return (
      <div>
        <inputWrapper type="text" placeholder="Search" onKeyDown={props.search}>
            <i className="fas fa-search" />
          </inputWrapper>
          
        <div className="social">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user-circle" />
        </div>
        
      </div>
  );
}

export default SearchBar;