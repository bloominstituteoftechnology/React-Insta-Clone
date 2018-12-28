import React, { Component } from 'react';
import PropTypes from "prop-types";
import searchbar from './ig_search_bar.png'

class SearchBar extends Component {
    render() {
        return(
            <div>
                <img src={searchbar} alt="searchbar" />
            </div>
        )
    }
}

export default SearchBar;