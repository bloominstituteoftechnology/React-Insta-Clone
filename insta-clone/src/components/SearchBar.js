import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {}

    }
    render() {
        return( 
            <div>
                <i className="fab fa-instagram"></i>
                <input type="text" placeholder="Search" />
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        )
    }
}

export default SearchBar;