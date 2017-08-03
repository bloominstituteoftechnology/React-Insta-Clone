import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Navbar, Input, Button } from 'react-bootstrap'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let tag = findDOMNode(this.refs.searchbar).value;
        console.log('Search input: ', tag);
        findDOMNode(this.refs.searchbar).value = '';
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Lambda School React II</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <input type="text" placeholder="Search" ref="searchbar" />
                    {' '}
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Navbar.Form>
            </Navbar>
        )
    }
}