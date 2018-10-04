import React from 'react';
// import React, { Component } from 'react';

const SearchBar = props => {
    return (
		<div className='search-bar'>
			<div className='search-bar-left-icons'>
				Camera logo | Instagram logo
				<img src='.../images/search-bar-camera.png' alt='Instagram camera logo' />C:\Users\Axis\LambdaSchool\cspt2\Weeks12-13\Projects\React-Insta-Clone\instagram\src\images\search-bar-camera.png
			</div>

			<div className='search-bar-middle-box'>
				Search SearchBar
			</div>

			<div className="search-bar-right-icons">
				Circle/Diamond logo Heart PersonIcon
			</div>
		</div>
    )
}

export default SearchBar;

// class SearchBar extends Component {
// 	render() {
// 		return (
// 			<div className='search-bar'>
// 				<div className='search-bar-left-icons'>
// 					Camera logo | Instagram logo
// 				</div>

// 				<div className='search-bar-middle-box'>
// 					Search SearchBar
// 				</div>

// 				<div className="search-bar-right-icons">
// 					Circle/Diamond logo Heart PersonIcon
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default SearchBar;
