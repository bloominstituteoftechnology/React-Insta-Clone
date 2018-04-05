import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/searchBar/searchBar.js';
import PostContainer from './components/postContainer/postContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.setState({ posts:  dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer {...this.state}/>
      </div>
    );
  }
}

export default App;
