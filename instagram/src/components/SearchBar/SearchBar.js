import React, {Component} from 'react';
import SearchLogo from './SearchLogo.js';
import SearchInputs from './SearchInput.js';
import SearchButtons from './SearchButtons.js';
import './SearchBar.css';

class SearchBar extends Component {
    render()    {
        return(
            <div className="searchBar">
                <SearchLogo />
                <SearchInputs />
                <SearchButtons />
            </div>
        )
    }
}

export default SearchBar;
