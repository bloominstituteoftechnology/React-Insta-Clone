import React from 'react';
import './SearchBar.css';



const  SearchBar= props => {
	return(
		<form onSubmit={props.searchTrigger}>
		<div className={props.SearchContainer}>
		<input className={props.searchBarStyle}
          	type="text"
		onChange ={props.changeSearchValue}
		//onKeyDown ={props.searchTrigger}
       		//onChange= {(event) => { 
                  //  props.changeSearchValue(event);
                   // props.searchTrigger(event);
                   // }}
          	placeholder="Search"
          	value={props.SearchValue} 
	  	/>
	</div>
	</form>	
	);	
};		

export default SearchBar;	
