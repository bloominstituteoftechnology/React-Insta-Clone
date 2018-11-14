import React, { Component } from 'react';
import './App.css';
import dummyData from './utilities/dummy_data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      searchQuery: ''
    }
  }

  onSearch(searchQuery) {
    this.setState({
      ...this.state,
      searchQuery
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={(searchQuery) => this.onSearch(searchQuery)} />
        <PostContainer searchQuery={this.state.searchQuery} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
