import React, {Component} from 'react';
import SearchLogo from './SearchLogo.js';
import SearchInputs from './SearchInputs.js';
import SearchButtons from './SearchButtons.js';
import './SearchBar.css';

class SearchBar extends Component {
    render()    {
        return(
            <div className="searchBar">
                <SearchLogo />
                <SearchInputs value= {this.props.value} filter={this.props.filter} />
                <SearchButtons />
            </div>
        )
    }
}

export default SearchBar;
