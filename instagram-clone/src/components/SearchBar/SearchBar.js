import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
  }

  handleSumbit = (event) => {
    event.preventDefault();
    console.log('Search Input: ', this.state.searchInput);
    this.setState({ searchingInput: ''});
  }

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value});
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Instagram</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
          <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput} />
          <Button type="submit" onClick={this.handleSumbit}>Submit</Button>
        </Navbar.Form>
      </Navbar>
    );
  }
}

export default SearchBar;