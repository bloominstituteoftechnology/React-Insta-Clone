import React, { Component } from 'react';
import './App.css';
import Post from './components/Post/Post.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';

class App extends Component {
  componentWillMount() {
    this.setState({ posts: dummyData, searchText: '' });
  }

  postElements() {
    return this.state.posts
      .filter((post) => post.username.includes(this.state.searchText))
      .map((post) => <Post {...post} />);
  }

  handleSearch = (e) => this.setState({ searchText: e.target.value })

  render() {
    return (
      <div className="App">
        <SearchBar searchText={this.state.searchText} handleSearch={this.handleSearch} />
        {this.postElements()}
      </div>
    );
  }
}

export default App;
