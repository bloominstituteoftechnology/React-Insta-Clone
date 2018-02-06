import React, {Component} from 'react';
import {Navbar, Button} from 'react-bootstrap';

class SearchBar extends Component {
    constructor() {
        super();
        this.state= {
            searchInput:''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault ();
        this.setState({ searchInput: ''});
    }

    handleSearchInput = (event) => {
        this.setState({ searchInput: event.target.value});
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'> Lambda School React II </a>
                        </NavBar.Brand>
                    </Navbar.Header>
                    <Navbar.Form moveLeft>
                        <input type= "text" placeholder="Search" value={this.state.searchInput}
                        onChange= {this.handleSearchInput}/>
                        <Button type="submit" OnClick={this.handleSubmit}>Submit</Button>
                        </NavBar.Form>
                        </Navbar>
        );
    }
}

export default SearchBar;