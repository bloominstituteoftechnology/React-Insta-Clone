import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

  return (
    <div>
      <nav className="SearchBar">
        <img src="https://png.icons8.com/color/50/000000/instagram-new.png"/>
        <div className= "vl"></div>
        <label className= "logo" >Instagram</label>
        <input id="search" placeholder="Search"/>
        <button onClick={props.logout}>Logout</button>
        <div className="HeartLikeButtton">♡</div>
      </nav>
    </div>
  )

}

export default SearchBar
