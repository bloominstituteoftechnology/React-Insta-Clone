import React from 'react';
import logo from '../../Img/instagram-brands.svg';
import compass from '../../Img/compass-regular.svg';
import heart from '../../Img/heart-regular.svg';
import user from '../../Img/user-regular.svg';

const SearchBar = (props) => {
	return (
		<React.Fragment>
			<div className="rowOne">
				<img className="instagramlogo" src={logo} alt="Instagram logo" />
				<h2>Instagram</h2>
			</div>
			<form action="submit">
				<input placeholder="Search" type="text" />
			</form>
			<div className="rowTwo">
				<img className="compass" src={compass} alt="new posts" />
				<img className="heart" src={heart} alt="liked posts" />
				<img className="user" src={user} alt="user profile" />
			</div>
		</React.Fragment>
	);
};

export default SearchBar;
