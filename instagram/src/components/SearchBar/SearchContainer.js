import React from 'react';
import Search from './Search'
import './SearchBar.css'

const SearchContainer = (props) => {
	return (
		<div className="header">
			<div className="social camera">
				<i class="fas fa-camera-retro"/>
			</div>
			<p className="instaclone">InstaClone</p>
			<Search handleSearch={props.handleSearch} />
			<div className="social">
				<i className="fa fa-compass" />
			</div>
			<div className="social">
				<i class="far fa-heart" />
			</div>
			<div className="social">
				<i class="far fa-user" />
			</div>
			  
		</div>
	);
};

export default SearchContainer;