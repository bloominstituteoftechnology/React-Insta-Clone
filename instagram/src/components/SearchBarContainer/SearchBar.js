import React from 'react';
import './SearchBar.css';
import Logo from './Instagram-Logo.png';
import Brand from './instagram-logo-text-black-png.png';
import Compass from './compass.png'
import User from './User.png'
import Heart from './heart.png'

const SearchBar = props => {
	return (
		<div className="search-container">
			<div className="logo-container">
				<img src={Logo} className="logo" />
				<img src={Brand} className="brand"/>
			</div>
			<div className="input-container">
				<form>
					<input
						type="text" 
						placeholder="        &#128269; Search"
						onChange={props.SearchBar}
					/>
				</form>
			</div>
			<div className="social-container">
				<div>
					<img src={Compass} className="social"/>
				</div>
				<div>
					<img src={Heart} className="social"/>
				</div>
				<div>
					<img src={User} className="social"/>
				</div>
			</div>
			
		</div>
	)
};

export default SearchBar;