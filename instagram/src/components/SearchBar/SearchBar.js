import React from 'react';
import insta from './insta.png';
import square from './square.png';
import person from './person.jpg';
import compas from './compas.png';
import h from './h.png';

import './search.css';

const SearchBar = (props) => {
	return (
		<div>
			<div className="logOut">
				<div>Welcome - {Object.keys(localStorage)}</div>
				<div className="logoutBTN" onClick={()=>{localStorage.clear();window.location.reload()}}>Log Out</div>
			</div>
			<div className="flex-logos-main">
				<div className="flex-logos">
					<img src={square} alt={"logo-icon"} className="square"/>
					<hr className="logo-hr"/>
					<img src={insta} alt={"instagram"} className="main-logo"/>
				</div>
				<form onSubmit={props.searchPosts}>
					<input type="text" onChange={props.handleInput} placeholder="Search" value={props.input} />
				</form>
				<div className="flex-logos2">
					<img src={compas} className="logo-images" alt="compas"/>
					<img src={h} className="logo-images" alt="heart"/>
					<img src={person} className="logo-images" alt="person"/>
				</div>
			</div>
			<hr className="hr-search-1"/>
			<hr className="hr-search-2"/>
		</div>
	)
}

export default SearchBar;