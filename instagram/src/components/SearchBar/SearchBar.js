import React from 'react';
import "./SearchBar.css";
import camera from '../icons/camera.png';
import heart from '../icons/heart.png';
import instagram from '../icons/instagram.png';
import marker from '../icons/marker.png';
import user from '../icons/user.png';

const SearchBar = props => {
  return (
    <div className="SearchBarContainer">
      <img src={camera} alt=""/>
      <img id="instagram" src={instagram} alt=""/>
      <input 
      class="searchbar"
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      placeholder="Search"
      />
      <img src={marker} alt=""/>
      <img src={heart} alt=""/>
      <img src={user} alt=""/>

    </div>
  )
}

export default SearchBar;