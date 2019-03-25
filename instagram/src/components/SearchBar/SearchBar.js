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
				<i class='far fa-compass' />
				<i class='far fa-heart' />
				<i class='far fa-user' />
			</div>
		</div>
	);
};

export default SearchBar;
