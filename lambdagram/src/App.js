import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: [],
      searchInput: ''
    }
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchInput: 'IM A LITTLE TEA POT'
    });
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    this.setState({
      instaData: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchInput={this.state.searchInput} 
          handleSearchInput={this.handleInput} 
          handleSearch={this.handleSearch} 
        />
        <PostContainer 
          posts={this.state.instaData} 
        />
      </div>
    );
  }
}

export default App;
