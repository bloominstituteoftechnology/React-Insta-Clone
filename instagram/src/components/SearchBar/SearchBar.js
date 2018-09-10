import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="search-container">
			<div className="search-logo" id="logo" />
			<form>
				<input
					placeholder="Search"
					ref={(input) => (this.search = input)}
					onChange={this.handleInputChange}
				/>
			</form>
			<div className="search-sprite" id="explore" />
			<div className="search-sprite" id="likes" />
			<div className="search-sprite" id="user" />
		</div>
	);
};

export default SearchBar;
