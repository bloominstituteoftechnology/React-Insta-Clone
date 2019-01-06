import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
        }
    }

    handleSearchInput = (e) => {
        this.setState({ searchField: e.target.value})
    }

    render() {
        const { searchField } = this.state;
        return (
            <div>
                <div className="SearchBar">search bar</div>
                <form>
                    <input 
                    placeholder="search for a post"
                    name="search"
                    type="text"
                    value={searchField}
                    onChange={this.handleSearchInput}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;