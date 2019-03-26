import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<div className='logo'>
				<i className='fab fa-instagram' /> <h4>Instagram</h4>
			</div>

			<div className='search'>
				<form>
					<input type='text' placeholder='&#xF002; Search' />
				</form>
			</div>

			<div className='nav'>
				<i className='far fa-compass' />
				<i className='far fa-heart' />
				<i className='far fa-user' />
			</div>
		</div>
	);
};

export default SearchBar;
