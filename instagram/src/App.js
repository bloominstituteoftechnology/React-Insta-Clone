import React, { Component } from 'react';
import dummyData from '././components/dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      
      </div>
    );
  }
}
export default App;
