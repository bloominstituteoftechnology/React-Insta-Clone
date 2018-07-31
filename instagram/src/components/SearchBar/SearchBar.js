import React from 'react';

const SearchBar = props => {


  return (
    <div className="search-main">
      <img className="icon insta-logo" src={require("./instagram-logo.png")} alt="insta-logo"></img>
      <img className="insta-logo-word" src={require("./instagram-word-only.png")} alt="insta-logo-word"></img>

      <form onSubmit={props.searchHandler}>
          <input className="search-bar" onChange={props.valueHandler} value={props.searchValue} placeholder=" &#x1F50D; Search"></input>
      </form>

      <img className="icon compass-icon" src={require("./compass.svg")} alt="compass-icon"></img>
      <img className="icon heart-icon" src={require("./heart.png")} alt="heart-icon"></img>
      <img className="icon profile-icon" src={require("./profile-line-icon-by-vexels.png")} alt="profile-icon"></img>
    </div>
  )
}

export default SearchBar;
