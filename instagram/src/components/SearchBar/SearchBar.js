import React from 'react';
import './SearchBar.css';



const  SearchBar= props => {
	return(
		<div className={props.SearchContainer}>
		<input className={props.searchBarStyle}
          	type="text"
          	//onChange={this.props.inputEvent(e); this.props.enterKeyPress(e)}
       		// onChange={props.searchInput}
        	 //onChange={props.enterKeyPress}
          	placeholder="Search"
          	value="" 
	  	/>
	</div>
	);	
};		

export default SearchBar;	
