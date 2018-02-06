import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';





class SearchBar extends Component {
  submitFilter = (e) => {
    const lookingFor = this.input.value;
    this.props.filterPosts(lookingFor);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <b>Instagram</b>
          <input type="text" onChange={this.submitFilter} ref={input => this.input = input} placeholder="Search"></input>
        </Navbar.Brand>
      </Navbar>
    )
  }

}

export default SearchBar;