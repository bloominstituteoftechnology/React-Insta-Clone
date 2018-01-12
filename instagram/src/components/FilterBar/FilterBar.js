import React from 'react';
import './FilterBar.css';

const FilterBar = (props) => {
	// filters correct post usernames but comments asynchronous with displayed posts
	return(
		<input className="FilterBar" onChange={props.filterResults} type="text" placeholder="Filter (semi-working)" />
	)
}

export default FilterBar