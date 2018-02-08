import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

	submitFilter = (event) => {
	  const criteria = this.input.value;
	  this.props.filterPosts(criteria);
	}

	render() {
		return (
			<div className="SearchBar">
				<input className="SearchBar-field" type="text" onChange={this.submitFilter} 
				ref={input => this.input = input} 
				placeholder="Search"></input>
			</div>
		);
	}
};

export default SearchBar;