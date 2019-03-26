import React from "react";
import "./SearchBar.css";
import Search from "./Search";

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<div className='logo'>
				<i className='fab fa-instagram' /> <h4>Instagram</h4>
			</div>

			<Search />

			<div className='nav'>
				<i className='far fa-compass' />
				<i className='far fa-heart' />
				<i className='far fa-user' />
			</div>
		</div>
	);
};

export default SearchBar;
