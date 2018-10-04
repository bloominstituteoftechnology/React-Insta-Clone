import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	render() {
		return (
			<div className= 'container'>
				<img src={require("./images/instagram.png")} alt="instagram"></img>
			</div>
		);
	}
}

export default SearchBar;
