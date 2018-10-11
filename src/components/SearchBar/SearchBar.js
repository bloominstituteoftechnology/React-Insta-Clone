import React from 'react';
import Logo from '../img/icon.png';
import Heart from '../img/heart.png';
import Compass from '../img/compass.png';
import Profile from '../img/profile.png';
import './SearchBar.css';

export const SearchBar = () => {
	return(
	<div className="Search-Bar">
		<div className="Search-Left">
			<h1>InstaClone</h1>
			<img src={Logo} alt="Logo" className="SearchLogo"></img>
		</div>
		<input type="text" placeholder="Search" name="SearchBar" className="SBar"></input>

		<div className="Search-Right">	
			<img src={Compass} alt="Compass" className="SearchButtons"></img>	
			<img src={Heart} alt="Heart" className="SearchButtons"></img>
			<img src={Profile} alt="Profile" className="SearchButtons"></img>
		</div>

	</div>
	)
}

export default SearchBar;
