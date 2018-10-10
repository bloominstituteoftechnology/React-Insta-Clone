import React from 'react';

const SearchBar = (props) => {
  return <div>
      <inputWrapper type="text" placeholder="Search" onKeyDown={props.search}>
        <i className="fas fa-search" />
      </inputWrapper>

      <i className="far fa-compass" />
      <i className="far fa-heart" />
      <i className="far fa-user-circle" />
    </div>;
}

export default SearchBar;