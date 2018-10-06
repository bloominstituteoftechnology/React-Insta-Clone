import React from 'react';
import './Search.css'
import logo from './logo.png'
import searchSolid from './search-solid.svg'
const SearchBar = props => {
	return (
		<div className="searchBar">
			<div className="left-items">
				<i class="fab fa-instagram fa-2x"></i>
				<div className="vertical"></div>
				<img src={logo} alt="instagram logo" className="logo" />
			</div>
			<input className="inputBar" type="text" placeholder="Search"></input>
			<div className="right-items">
				<i class="far fa-compass fa-2x"></i>
				<i class="far fa-heart fa-2x"></i>
				<i class="far fa-user fa-2x"></i>
			</div>
		</div>
	)
};

export default SearchBar;