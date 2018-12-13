import React from 'react';
import logo from '../../data/pics/logo.png'
import title from '../../data/pics/title.png'
import './SearchBar.css'

const SearchBar = props => {
  	return (
  		<div className = "searchBar">
	  		<img className ="logo" src= {logo} alt="Logo" />,
	  		<img className ="title" src = {title} alt ="Title"/>
	  		<form className ="search">
	  			<input type="text" placeholder="Search"/>
	  		</form>
  		</div>
  	)

}

export default SearchBar;