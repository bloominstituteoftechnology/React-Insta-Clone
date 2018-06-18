import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';
import data from './dummy-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <div className="posts">
          {this.state.data.map((post, index) => (
            <PostContainer key={index} data={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
