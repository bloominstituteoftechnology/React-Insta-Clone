// import React from 'react';
import React, { Component } from 'react';

// const SearchBar = props => {
//     return (
//         <>
//             This is the search SearchBar
//         </>
//     )
// }

// export default SearchBar;

class SearchBar extends Component {
	render() {
		return (
			<div className='search-bar'>
				<div className='search-bar-left-icons'>
					Camera logo | Instagram logo
				</div>

				<div className='search-bar-middle-box'>
					Search SearchBar
				</div>

				<div className="search-bar-right-icons">
					Circle/Diamond logo Heart PersonIcon
				</div>
			</div>
		);
	}
}

export default SearchBar;
