import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	return(
		<input className="SearchBox" onChange={props.filterResults} type="text" placeholder="Search" />
	)
}

export default SearchBar