import React from 'react';
import './SearchBar.css';
import Iglogo from './img/instagram.png';


const  SearchBar= props => {
	return(
	<div className={props.SearchContainer}>
		<img className="logo" src={Iglogo} alt="" />

	<form onSubmit={props.searchTrigger}>

	<input className={props.searchBarStyle} type="text" onChange ={props.changeSearchValue} placeholder="Search" value={props.SearchValue} />
	</form>	
	
	</div>
	
	);	
};		

export default SearchBar;	
