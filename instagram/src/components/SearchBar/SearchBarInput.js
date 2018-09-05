import React from 'react';

function SearchBarInput(props) {
    return (
      <form onSubmit={props.search} onChange={props.handleChanging}>
          <input
            type = "text"
            name = "search"
            placeholder = "search"
          />
      </form>
    );
  }

export default SearchBarInput;