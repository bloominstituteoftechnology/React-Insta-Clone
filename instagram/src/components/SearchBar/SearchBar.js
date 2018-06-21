import React from 'react';
import {SearchBarStyle, SearchWrapper, IgLogo} from "../ReusableStyles/ReusableStyles";
import Iglogo from './img/instagram.png';



const  SearchBar= props => {
	return(
	<SearchWrapper>
		<IgLogo src={Iglogo} alt="" />

	<SearchBarStyle type="text" onChange ={props.searchTrigger} placeholder="Search"  />
	
	</SearchWrapper>
	
	);	
};		

export default SearchBar;	
