import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import dummyData from './dummy-data.js';
import PostsContainer from './components/PostsContainer/PostsContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    this.setState({postData: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.postData} />
      </div>
    );
  }
}

export default App;
