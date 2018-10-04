import React from 'react'
import "../../App.css"

const SearchBar = props => {
	return (
		<div className='searchBarContainer'>
			<div className='cameraIcon' onClick={props.camera}></div>
			<div className='titleText'>Instagram</div>
			<input className="searchBarInput" type="text" value={props.value} />
			<div className='iconContainer'>
				<div className='icon1' onClick={props.compass}></div>
				<div className='icon2' onClick={props.heart}></div>
				<div className='icon3' onClick={props.person}></div>
			</div>
		</div>


	);
};

export default SearchBar;
