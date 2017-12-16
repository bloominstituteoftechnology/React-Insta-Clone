import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super ();
    this.state = {
      searchInput: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search input', this.state.searchInput);
    this.setState({searchInput: ''});
  }

  handleSearchInput = (event) => {
    this.setState({searchInput: event.target.value});
  }
  render() {
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">REACT MMONSTER KILL</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Form pullLeft>
            <input type="text" placeholder="search" value={this.state.searchInput} onChange={this.handleSearchInput} />
            <Button type="submit" onClick={this.state.handleSubmit}>Submit</Button>
          </Navbar.Form> 
        </Navbar>
      </div>
    )
  }
    
  }
  
  export default SearchBar;

