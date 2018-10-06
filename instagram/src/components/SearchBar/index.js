import React from 'react';
// import React, { Component } from 'react';
import './index.css';

const SearchBar = props => {
    return (
		<div className='search-bar'>
			<div className='search-bar-left-icons'>
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIQwyp45PNTDM8mPakqTqEhGD-sRtfFBad5vh_Vc0y6ijRbbi' alt='Instagram camera logo' className='instagram-camera-logo'/>
				<img src='http://trifunk.com/wp-content/uploads/2013/06/instagram-logo.png' alt='Instagram logo' />
			</div>

			<div className='search-bar-middle-box'>
				<form>
					<input type="text" placeholder="&#x1f50d; Search" />
				</form>
			</div>

			<div className="search-bar-right-icons">
				<img src='https://image.freepik.com/iconen-gratis/safari-kompas-logo-ios-7-interface-symbool_318-33584.jpg' alt='Compass Icon' />
				<img src='https://ubisafe.org/images/svg-heart-black-and-white-6.png' alt='Heart logo' />
				<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png' alt='Person logo' />
			</div>
		</div>
    )
}

export default SearchBar;