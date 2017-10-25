import React from 'react';
// import './Search.css';

const Search = (props) => {
  return (
    <div>
      <input type="text" value={props.query} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Search</button>
      <p></p>
    </div>
  )
}

export default Search;