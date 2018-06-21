import React from 'react';
import {SearchBarStyle, SearchIconWrapper, SearchWrapper, IgLogo, SearchBarIcons} from "../ReusableStyles/ReusableStyles";
import Iglogo from './img/instagram.png';



const  SearchBar= props => {
	return(
	<SearchWrapper>
		<IgLogo src={Iglogo} alt="" />

	<SearchBarStyle type="text" onChange ={props.searchTrigger} placeholder="Search"  />
	
	<SearchIconWrapper>
		<SearchBarIcons> <i className="far fa-compass" /> </SearchBarIcons>
		 <SearchBarIcons><i className="far fa-heart" /></SearchBarIcons>
		<SearchBarIcons><i className="far fa-user-circle" /></SearchBarIcons>
	</SearchIconWrapper>
		
	</SearchWrapper>
	
	);	
};		

export default SearchBar;	
