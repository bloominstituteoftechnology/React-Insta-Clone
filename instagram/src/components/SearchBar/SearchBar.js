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
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default SearchBar;
