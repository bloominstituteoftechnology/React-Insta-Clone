import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, Button } from 'reactstrap';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search input: ', this.state.searchInput);
        this.setState({ searchInput: '' });
    }

    handleSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
            <div className="Navbar">
                <div className="Navbar.Form">
                    <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput} />
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </div>
            </div>
        )
    }
}

export default SearchBar;