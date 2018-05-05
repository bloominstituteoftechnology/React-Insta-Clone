import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "Search",
            update: '',
        }
    }
    render() {
        return (
            <div>
                <h1>SearchBar</h1>
            </div>
        );
    }

}

export default SearchBar;