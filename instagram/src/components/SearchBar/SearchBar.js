import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="SearchBar">
				{/* brand icon goes here */}
				<div className="brand">
					<a href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram fa-3x"></i></a>
					{/* brand title goes here */}
					<p>instagram</p>
				</div>
				{/* search bar goes here */}
				<form>
					<input type="text" placeholder="Search here..." />
				</form>
				{/* accent icons go here */}
				<div>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en"><i class="far fa-compass fa-2x"></i></a>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en"><i class="far fa-heart fa-2x"></i></a>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en"><i class="far fa-user fa-2x"></i></a>
				</div>
			</div>
		);
	}
}

export default SearchBar;