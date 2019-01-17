import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="search-container">
			<div className="sprite" id="logo" />
			<form onSubmit={props.handleSearch}>
				<input
					id="search-input"
					placeholder="Search"
					value={props.inputText}
					onChange={props.handleInputChange}
				/>
				<span className="sprite" id="search" />
			</form>
			<div className="sprite" id="explore" />
			<div className="sprite" id="likes" />
			<div className="sprite" id="user" />
		</div>
	);
};

SearchBar.propTypes = {
	searchInput: PropTypes.string,
	handleInputChange: PropTypes.func,
	handleSearch: PropTypes.func,
};

export default SearchBar;
