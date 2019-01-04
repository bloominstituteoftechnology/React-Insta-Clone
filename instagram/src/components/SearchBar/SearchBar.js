import React from 'react';
import logo from '../../data/pics/logo.png'
import title from '../../data/pics/title.png'
import heart from '../../data/pics/heart.png'
import nav from '../../data/pics/nav.png'
import empty_user from '../../data/pics/empty_user.png'
import './SearchBar.css'

const SearchBar = props => {
  	return (
  		<div className = "searchBar">
	  		<img className ="logo" src= {logo} alt="Logo" />,
	  		<h4> | </h4>
	  		<img className ="title" src = {title} alt ="Title"/>

	  		<input type="text" placeholder="Search" 
	  			onKeyDown = {props.searchPosts}/>

	  		<img className ="nav" src = {nav} alt ="Nav"/>

	  		<img className ="heart" src = {heart} alt ="Heart"/>

	  		<img className ="empty_user" src = {empty_user} alt ="Empty_user"/>

  		</div>
  	)

}

export default SearchBar;