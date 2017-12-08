import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searcInput: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Search input: ", this.state.searchInput);
    this.setState({ searchInput: " " });
  };

  handleSearchInput = e => {
    this.setState({ searcInput: e.target.value });
  };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Lambda School React II </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searcInput}
            onChange={this.handleSearchInput}
          />
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Navbar.Form>
      </Navbar>
    );
  }
}
export default SearchBar;
