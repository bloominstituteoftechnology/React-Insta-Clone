import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<div className='logo'>
				<i class='fab fa-instagram' /> <h4>Instagram</h4>
			</div>

			<div className='search'>
				<form>
					<input type='text' placeholder='Search' />
				</form>
			</div>

			<div className='nav'>
				<h1>holder</h1>
			</div>
		</div>
	);
};

export default SearchBar;
