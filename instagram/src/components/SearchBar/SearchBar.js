import React, { Component } from 'react';
import './SearchBar.css'
class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      searchText: ''
    }
    
    
  }
  
  handleSearchChange = (event) => {
    this.setState({searchText: event.target.value})
    console.log(this.state.searchText)
  }

  searching = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <nav className='navBar'>
        <div>CameraPic || Instagram 2.0</div>
        <form onSubmit={this.searching}>
          <input 
            type="text" 
            onChange={this.handleSearchChange} 
            placeholder='Search for what??' 
            value={this.state.searchText}
          />
        </form>
      </nav>
    )
  }
}

export default SearchBar;