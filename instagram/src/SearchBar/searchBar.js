import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        console.log(this.props);
        return <div>{this.state}</div>
    }

}

export default SearchBar;