import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
	}
	// Event Handler
	handleSearch = (event) => {
		this.setState({ [event.target.name] : event.target.value });
	}

	render() {
		// console.log('user: ' + this.state.user);
		return (
			<div className="SearchBar">
				{/* brand icon goes here */}
				<div className="brand">
					<a href="https://www.instagram.com/?hl=en"><i className="fab fa-instagram fa-3x"></i></a>
					{/* brand title goes here */}
					<p>instagram</p>
				</div>
				{/* search bar goes here */}
				<form onSubmit={() => {this.props.search(this.state.user)}}>
					<input 
						type="text" 
						placeholder="Search here..." 
						name="user"
						value={this.state.user}
						onChange={this.handleSearch}/>
				</form>
				{/* accent icons go here */}
				<div>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en"><i className="far fa-compass fa-2x"></i></a>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en"><i className="far fa-heart fa-2x"></i></a>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en"><i className="far fa-user fa-2x"></i></a>
				</div>
			</div>
		);
	}
}

export default SearchBar;