import React, { Component } from 'react';

class SearchBar extends Component {

    submitFilter = (event) => {
        const searchTerm = this.input.value;
        this.props.filterPosts(searchTerm);
    }

    render () {
        return (
            <div className="SearchBar">
                <input className="SearchBar-field" type="text" onChange={this.submitFilter} ref={input => this.input = input} placeholder="Looking for someone?"></input>
            </div>
        );
    }
};

export default SearchBar;