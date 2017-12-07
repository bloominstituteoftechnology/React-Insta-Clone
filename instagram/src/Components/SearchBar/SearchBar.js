import React, {Component} from 'react';

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      searchInput: ''
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({searchInput: ''});
  }

  handleSearchInput = (event) => {
    this.setState({searchInput: event.target.value});
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Lambda School React II</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
          <input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput}/>
          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        </Navbar.Form>
      </Navbar>
    );
  }

}



export default SearchBar