import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="search-container">
			<form>
				<input
					placeholder="Search"
					value={props.inputText}
					onChange={props.handleInputChange}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
