import React from 'react';
import instaLogo1 from '../../Images/insta-profile.png';
import instaLogo2 from '../../Images/insta-heart.png';
import instaLogo3 from '../../Images/insta-compass.png';
import instaLogo4 from '../../Images/insta-logo.png';

const Header = () => {
	return (
		<div className="header">
			<img src={instaLogo3} alt="#" />
			<img src={instaLogo2} alt="#" />
			<img src={instaLogo1} alt="#" />
			<img src={instaLogo4} alt="#" />
		</div>
	);
};
export default Header;
