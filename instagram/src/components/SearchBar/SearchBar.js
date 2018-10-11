import React, { Component } from 'react';
import './Search.css'
import logo from './logo.png'
import searchSolid from './search-solid.svg'

class SearchBar extends Component {
	constructor() {
		super()
	}
	
	render() {
	 return (
		<div className="searchBar">
			<div className="left-items">
				<i className="fab fa-instagram fa-2x"></i>
				<div className="vertical"></div>
				<img src={logo} alt="instagram logo" className="logo" />
			</div>
			<input className="inputBar" type="text" placeholder="Search"></input>
			<div className="right-items">
				<i className="far fa-compass fa-2x"></i>
				<i className="far fa-heart fa-2x"></i>
				<i className="far fa-user fa-2x"></i>
			</div>
		</div>
	)
  }
};

export default SearchBar;