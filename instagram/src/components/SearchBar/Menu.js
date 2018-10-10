import React from 'react';
import './searchbar.css';

const Menu = () => {
	return (
		<div className="menu">
			<img
				className="compass"
				src={require('../assets/compass.jpg')}
				alt={'compass'}
			/>
			<img
				className="heart"
				src={require('../assets/heart.jpg')}
				alt={'heart'}
			/>
			<img
				className="profile"
				src={require('../assets/profile.jpg')}
				alt={'profile'}
			/>
		</div>
	);
};

export default Menu;
