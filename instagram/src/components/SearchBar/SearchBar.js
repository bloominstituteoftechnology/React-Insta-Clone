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

class SearchBar extends Component {

	submitFilter = (event) => {
	  const criterion = this.input.value;
	  this.props.filterPostsByUser(criterion);
	}

	render() {
		return (
			<div className="SearchBar">
				<input className="SearchBar-field" type="text" onChange={this.submitFilter} ref={input => this.input = input} placeholder="Search"></input>
			</div>
		);
	}
};

export default SearchBar;