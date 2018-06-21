import React from 'react';
import './search.css';
import camera from "./images/camera.png";
import logo from "./images/logo.png";
import lens from "./images/lens.png";
import compass from "./images/compass.png";
import heart from "./images/heart.png";
import profile from "./images/profile.png";

const SearchBar = () => {
//returns the nav bar, contains a lot of images
return(
<div className="navBar">
<div className="front">
<img className="cam" src={camera} alt="camera icon"/>
<p>|</p>
<img className="logo" src={logo} alt="instagram"/>
</div>
<div className="searchField">
<img className="lens" src={lens} alt=""/>
<p>Search</p>
</div>
<div className="back">
<img className="compass" src={compass} alt="compass"/>
<img className="heart" src={heart} alt="heart"/>
<img className="profile" src={profile} alt="profile"/>
</div>
</div>
);
}

export default SearchBar;