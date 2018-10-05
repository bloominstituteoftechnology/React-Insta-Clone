import React from 'react'
import "../../App.css"

const SearchBar = props => {
	return (
		<div className='searchBarContainer'>
			<div className='cameraIcon' onClick={props.camera}></div>
			<a className='button' id='titleText'>Instagram</a>
			<input className="searchBarInput" type="text" value={props.value} />
			<div className='iconContainer'>
				<a className='button' id='icon1'  href="#" onClick={props.compass}></a>
				<a className='button' id='icon2'  href="#" onClick={props.heart}></a>
				<a className='button' id='icon3'  href="#" onClick={props.person}></a>
			</div>
		</div>


	);
};

export default SearchBar;
