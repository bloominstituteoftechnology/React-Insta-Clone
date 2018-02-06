import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

class SearchBar extends React.Component {

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchFor = this.input.value;
    this.props.filterPosts(searchFor);
  }

  render() {
    return (
      <Navbar>
        <NavbarBrand>
          <b>Instaclone</b>
          <input type="text" onChange={this.handleSubmit}
          ref={input => this.input = input}
          placeholder="Search"></input>
        </NavbarBrand>
      </Navbar>
    )
  }
}

export default SearchBar;
