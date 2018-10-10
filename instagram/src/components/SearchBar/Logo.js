import React from 'react';
import './searchbar.css';

const Logo = () => {
	return (
		<div className="logo">
			<img
				className="logoIcon"
				src={require('../assets/logo.png')}
				alt={'insta-camera'}
			/>
			<img
				className="logoName"
				src={require('../assets/instagram.png')}
				alt={'insta-logo'}
			/>
		</div>
	);
};

export default Logo;
