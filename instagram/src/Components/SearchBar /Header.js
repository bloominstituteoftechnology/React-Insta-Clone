import React from 'react';
import instaLogo1 from '../../Images/insta-profile.png';
import instaLogo2 from '../../Images/insta-heart.png';
import instaLogo3 from '../../Images/insta-compass.png';
import instaLogo4 from '../../Images/insta-logo.png';
import './Header.css';
const Header = (props) => {
	return (
		<div className="header">
			<div className="input">
				<input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
			</div>
			<div className="profile">
				<img src={instaLogo3} alt="#" />
				<img src={instaLogo2} alt="#" />
				<img src={instaLogo1} alt="#" />
			</div>
			<img className="logo" src={instaLogo4} alt="#" />
		</div>
	);
};
export default Header;
