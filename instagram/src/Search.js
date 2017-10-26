import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <div className="background">
      <div className="appName">JaPANgram</div>
      <input type="text" value={props.query} onChange={props.changeHandler} />
      <button onClick={props.addToList} className="input__button">Search</button>
      <p></p>
    </div>
  )
}

export default Search;