import React from "react";
import PropTypes from "prop-types";
// styles
import "./SearchBar.css";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
	}
	// Event Handler
	handleSearch = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className="SearchBar">
				{/* brand icon goes here */}
				<div className="brand">
					<a href="https://www.instagram.com/?hl=en">
						<i className="fab fa-instagram fa-3x" />
					</a>
					{/* brand title goes here */}
					<p>instagram</p>
				</div>
				{/* search bar goes here */}
				<form
					onSubmit={event => {
						event.preventDefault();
						this.props.search(this.state.user);
					}}>
					<input
						type="text"
						placeholder="Search here..."
						name="user"
						value={this.state.user}
						onChange={this.handleSearch}
					/>
				</form>
				{/* accent icons go here */}
				<div>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en">
						<i className="far fa-compass fa-2x" />
					</a>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en">
						<i className="far fa-heart fa-2x" />
					</a>
					<a className="accentLogo" href="https://www.instagram.com/?hl=en">
						<i className="far fa-user fa-2x" />
					</a>
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	search: PropTypes.func.isRequired
};

export default SearchBar;
