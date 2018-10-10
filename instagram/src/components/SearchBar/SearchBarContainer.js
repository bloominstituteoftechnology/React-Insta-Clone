import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import IGCamera from '../../assets/instagram-brands.svg';
import Compass from '../../assets/compass-regular.svg';
import User from '../../assets/user-regular.svg';
import heart from '../../assets/heart-regular.svg';
import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="search-bar-wrapper">
			<div className="image-wrapper">
				<img alt="instagram logo" src={IGLogo} className="logo-image" />
				<img alt="IG Camera Logo" src={IGCamera} className="camera-image" />
			</div>
			<div className="search">
				<input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
			</div>
			<div className="social-wrapper">
				<div className="social">
					<img alt="compass" src={Compass} />
				</div>
				<div className="social">
					<img alt="heart" src={heart} />
				</div>
				<div className="social">
					<img src={User} alt="User" />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
