import React from 'react';
import './search.css';


const SearchBar = props => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={require('./../images/instagram-logo.png')} alt="" />
        <img onClick={props.clearSearch} src={require('./../images/instagram-font.png')} className="instagram-font" alt="" />
      </div>
      <form onSubmit={props.search}>
        <input onChange={props.changeText} type="text" value={props.value} placeholder="Search"></input>
      </form>
      <div className="nav-items">
        <img src={require('./../images/compass.png')} alt="" />
        <img src={require('./../images/favourite-heart-lrg.png')} alt="" />
        <img src={require('./../images/profile.png')} alt="" />
      </div>
    </div>
  )
}

export default SearchBar;