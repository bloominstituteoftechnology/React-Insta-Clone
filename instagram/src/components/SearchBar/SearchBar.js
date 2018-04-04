import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>{this.props.data}</div>
        )
    }
}
export default SearchBar;