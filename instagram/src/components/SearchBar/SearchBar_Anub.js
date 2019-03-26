import React from 'react';

import './SearchBar_Anub.scss';

const SearchBar = () => {
	return (
		<div className="searchBar">
			<div className="logos">
				<i className="fab fa-instagram fa-2x"></i>
				<div className="image-container">
					<img src={require("../../assets/instagram.jpg")} alt="header_image" className="name-image"/>
				</div>
			</div>
			<form>
				<input type="text" placeholder="Search"/>
			</form>
			<div className="icons">
				<i className="far fa-compass fa-lg"></i>
				<i className="far fa-heart fa-lg"></i>
				<i className="far fa-user fa-lg"></i>
			</div>
		</div>
	)
}

export default SearchBar;
