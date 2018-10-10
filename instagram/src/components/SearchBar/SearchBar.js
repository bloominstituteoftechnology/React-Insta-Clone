import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <img src="../../instagramsprites1" alt="" />
      <form onSubmit={props.search}>
        <input
          type="text"
          placeholder="Search"
          onChange={props.changeHandler}
          value={props.text}
        />
      </form>
    </div>
  );
};

export default SearchBar;
