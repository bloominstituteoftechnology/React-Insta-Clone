import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	render() {
		return <div className="container">
				<img id="instagram" src={require('./images/instagram.png')} alt="instagram" />
				<h2>Instagram</h2>
      <form onSubmit={this.props.searchHandler}>
					<input  placeholder='search' onChange={this.props.searchInput} type="text" className="search" />
				</form>

				<div className="icons">
					<i className="far fa-compass" />
					<i className="far fa-heart" />
					<i className="far fa-user" />
				</div>
			</div>;
	}
}

export default SearchBar;
