import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './searchbar.css';

class SearchBar extends Component {
    constructor () {
        super();
        this.state = {
            searchText: ''
        };
    }
    render(){
        return ( 
        <div className="topframe">
            <p>Logo</p>
            <img src={"./logo.svg"} width="100px" height="100px" />
            <Form>
                <input id="searchField" type="text" placeholder="Search"/>
            </Form>
            <p>Discover</p>
            <p>Likes</p>
            <p>Profile</p>
        </div> );
    }
}

export default SearchBar;