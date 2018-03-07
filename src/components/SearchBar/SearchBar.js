import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class SearchBar extends Component {
    constructor() {
        super();
        // this.state
    }

    render () {
        return (
            <div>
                <span><img src="./ilogo.png"/></span>
                <span>Instagram</span>
                <span>Search Bar</span>
                <span>explore</span>
                <span>heart</span>
                <span>user</span>
            </div>
        );
    }

}


export default SearchBar;