import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="search-container">
			<div className="sprite" id="logo" />
			<form>
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

export default SearchBar;
