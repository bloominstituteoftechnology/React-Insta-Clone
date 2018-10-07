import React from 'react'
import "../../App.css"
import PropTypes from 'prop-types';
/* import Search from './Search'; */

const SearchBar = props => {

	const clickHandler = (e) => {
			console.log("clickHandler")
	}
	const submitHandler = () => {
		alert("wait")
	}

	return (
		
		 <div className='searchBarContainer'>
			<a className='button' id="camera" onClick={props.camera}></a>
			<a className='button' href="./index.html" id='titleText'>Instagram</a>
			 
			<form className="searchForm" onSubmit={submitHandler} value={props.value}>
				<input
					className="searchBarInput"
					placeholder="Search..."
					type="text"
					value={props.value}
					onChange={clickHandler}
					placeholder={'Search...'}
				/>
			</form>
			<div className='iconContainer'>
				<a className='button' id='icon1' href="./index.html" onClick={props.compass}></a>
				<a className='button' id='icon2' href="./index.html" onClick={props.heart}></a>
				<a className='button' id='icon3' href="./index.html" onClick={props.person}></a>
			</div>
		</div>


	);
};
SearchBar.propTypes = {
	value: PropTypes.string
}
export default SearchBar;
