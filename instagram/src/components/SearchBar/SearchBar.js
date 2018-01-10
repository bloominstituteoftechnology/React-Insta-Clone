import React, { Component } from 'react';
import './SearchBar.css';

 class SearchBar extends Component {
 	constructor() {
 		super();
 		this.state = {
 			newItem: ''
 		};
 		this.handleItemInput = this.handleItemInput.bind(this);
 	}

 	handleItemInput(event) {
 		this.setState({
 			newItem: event.target.value
 		});
 	}

 	render() {
 		return (
			<div>
				<input type="text" onChange={this.handleItemInput} placeholder="Search" value={this.state.newItem} />	
			</div>
		);
 	}
	
}

export default SearchBar;