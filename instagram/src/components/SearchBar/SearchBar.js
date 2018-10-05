import React from 'react'
import "../../App.css"

const SearchBar = props => {
	return (
		<div className='searchBarContainer'>
			<div className='cameraIcon' onClick={props.camera}></div>
			<a className='button' href="./index.html" id='titleText'>Instagram</a>
			<input className="searchBarInput" type="text" value={props.value} />
			<div className='iconContainer'>
				<a className='button' id='icon1' href="./index.html" onClick={props.compass}></a>
				<a className='button' id='icon2' href="./index.html" onClick={props.heart}></a>
				<a className='button' id='icon3' href="./index.html" onClick={props.person}></a>
			</div>
		</div>


	);
};

export default SearchBar;
