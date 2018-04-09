import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Search Bar goes Here</h1>
			{/* brand icon goes here */}
				<div><a href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram fa-3x"></i></a></div>
		{/* brand title goes here */}
				<h1>Instagram</h1>
	{/* search bar goes here */}
{/* accent icons go here */}
			</div>
		);
	}
}

export default SearchBar;