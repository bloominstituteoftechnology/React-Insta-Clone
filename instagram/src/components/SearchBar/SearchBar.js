// import React from 'react';
// import './SearchBar.css';

// const SearchBar = () => {
//   return (
//     <div className='SearchBar'>
//       <input type="text" placeholder="Search (doesn't work yet...)" />
//       <button>Search</button>
//     </div>
//   );
// }

// export default SearchBar;

import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	constructor() {
		super()
		this.state = {
			text: ''
		}
	}

	submitFilter = (filter) => {
	  this.props.filterPostsByUser(filter);
	}

	processNewSearch = (event) => {
		this.setState({ text: event.target.value });
	}

	submitNewSearch = (event) => {
		const text = this.state.text;
		this.setState({text: ''});
		this.submitFilter(text);
	}

	render() {
		return (
			<div className="SearchBar">
				<input type="text" onChange={this.processNewSearch.bind(this)} placeholder="Search" value={this.state.text}></input>
				<button onClick={this.submitNewSearch.bind(this)}>Search</button>
			</div>
		);
	}
};

export default SearchBar;