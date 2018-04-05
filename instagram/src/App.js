import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     posts: []
  //   }
  // }

  // load data
  componentWillMount() {
    this.setState( { posts: dummyData, searchText: '' } );
  }

  // get post items
  getPosts() {
      return this.state.posts
          // This will filter when searching for a username
          .filter((post) => post.username.includes(this.state.searchText))
          .map((post) => <PostContainer {...post} />);
  }

  // Set search text to input value
  handleSearch = (e) => this.setState({ searchText: e.target.value })
 
  render() {
    return (
      <div className="App">
      <SearchBar searchText={this.state.searchText} handleSearch={this.handleSearch} />
          {this.getPosts()}
      </div>
    );
  }
}

export default App;
