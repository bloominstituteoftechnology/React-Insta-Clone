import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	// just show usernames. have not implemented yet
	return(
		<input className="SearchBox" onChange={props.filterResults} type="text" placeholder="Search (not implemented)" />
	)
}

export default SearchBar