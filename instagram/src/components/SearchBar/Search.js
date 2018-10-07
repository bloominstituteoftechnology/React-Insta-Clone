import React, {Component} from 'react';
import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchImages from './SearchImages';

import './search.css';

class Search extends Component {

	render() {
	   return(
			<div className='search-bar'>
	           <SearchHeader content='instagram' class='search-head'/>
			   <SearchInput  class='search-input' />
			   <SearchImages class='search-image' />
			</div>
	    );	
	}
}

export default Search;

