import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	render() {
		return <div className="container">
				<img id='instagram' src={require('./images/instagram.png')} alt="instagram" />
				<h2>Instagram</h2>
      <input className="search" placeholder="Search"/>
      <div className="icons" >
				<i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user"></i>
        </div>
			</div>;
	}
}

export default SearchBar;
