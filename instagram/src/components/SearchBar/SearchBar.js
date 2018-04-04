import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}

export default SearchBar;
//Just a random comment