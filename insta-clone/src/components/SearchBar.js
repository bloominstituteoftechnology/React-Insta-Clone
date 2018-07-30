import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {}

    }
    render() {
        return( 
            <div>
                <input type="text" placeholder="Search" />
            </div>
        )
    }
}

export default SearchBar;