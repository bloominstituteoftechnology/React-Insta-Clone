import React from 'react';
import logo from '../../data/pics/logo.png'
import title from '../../data/pics/title.png'
import heart from '../../data/pics/heart.png'
import nav from '../../data/pics/nav.png'
import background from '../../data/pics/background.jpg'

import empty_user from '../../data/pics/empty_user.png'
// import './SearchBar.css'

import styled from 'styled-components'


const SearchBar = props => {

	const Header = styled.div`
		display:flex;
		justify-Content: center;
		background-img: {background}

	`
	const Title = styled.img`
		width: 100px;
		height: 40px;
	`

	const Icon = styled.img `
		width: 30px;
		height: 30px;
		padding: 0px 10px 0px 10px;
	`



  	return (
  		<Header>
	  		<div className = "searchBar">

		  		<Icon src={logo}></Icon>
		  		<Title src={title}></Title>

		  		<input type="text" placeholder="Search" 
		  			onKeyDown = {props.searchPosts}/>

		  		<Icon src={nav}></Icon>
		  		<Icon src={heart}></Icon>
		  		<Icon src={empty_user}></Icon>

		  		

	  		</div>
  		</Header>

  	)

}

export default SearchBar;