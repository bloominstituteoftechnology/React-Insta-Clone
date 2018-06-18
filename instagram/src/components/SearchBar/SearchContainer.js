import React from 'react';
import Search from './Search'
import './SearchBar.css'

const SearchContainer = (props) => {
	return (
		<div className="header">
			<p>CameraIcon</p> <p>Instagram</p><Search /><p>Compass</p> <p>Heart</p> <p>User</p>
		</div>
	);
};

export default SearchContainer;