import React from 'react';
import './SearchBar.css';
import Iglogo from './img/instagram.png';


const  SearchBar= props => {
	return(
	<div className="search-container">
		<img className="logo" src={Iglogo} alt="" />

	<input className="search-bar" type="text" onChange ={props.searchTrigger} placeholder="Search"  />
	
	</div>
	
	);	
};		

export default SearchBar;	
