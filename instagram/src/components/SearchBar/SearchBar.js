import React from 'react';

function SearchBar(props) {
	return (
		<div className="search-box">
			<div class="app-title">Fakestagram</div>
			<input placeholder="Type to search..." onChange={props.searchPost}></input>
		</div>
	);
}

export default SearchBar;