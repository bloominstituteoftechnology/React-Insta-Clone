import React from 'react';
import Logo from '../img/icon.png';
import Heart from '../img/heart.png';
import Compass from '../img/compass.png';
import Profile from '../img/profile.png';

export const SearchBar = () => {
	return(
	<div className="Search-Bar">
		<div className="Search-Left">
			<h1>InstaClone</h1>
			<img src={Logo} alt="Logo" className="SearchLogo"></img>
		</div>
		<input type="text" placeholder="Search" name="SearchBar" className="SBar"></input>

		<div className="Search-Right">	
			<img src={Compass} alt="Compass"></img>	
			<img src={Heart} alt="Heart"></img>
			<img src={Profile} alt="Profile"></img>
		</div>

	</div>
	)
}

export default SearchBar;
