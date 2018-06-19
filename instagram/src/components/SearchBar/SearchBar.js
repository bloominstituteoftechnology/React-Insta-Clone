import React from 'react';
import './SearchBar.css';



const  SearchBar= props => {
	return(
		<div className={props.SearchContainer}>
		<input className={props.searchBarStyle}
          	type="text"
		//onChange ={props.changeSearchValue}
       		onChange= {(event) => { 
                    props.changeSearchValue(event);
                    props.searchTrigger(event);
                    }}
          	placeholder="Search"
          	value={props.SearchValue} 
	  	/>
	</div>
	);	
};		

export default SearchBar;	
