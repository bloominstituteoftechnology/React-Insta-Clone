import React, {Component} from 'react';
import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchImages from './SearchImages';

import './search.css';

class Search extends Component {

	render() {
		// console.log(this.props.display);
	   return(
			<div className='search-bar'>
	           <SearchHeader content='instagram' class='search-head'/>
			   <SearchInput  class='search-input' display={this.props.display}/>
			   <SearchImages class='search-image' />
			</div>
	    );	
	}
}

export default Search;

