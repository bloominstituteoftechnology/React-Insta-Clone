import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';




class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <SearchBar />
        </header>
        <main className='App-main'>
        <PostContainer posts={this.state.posts} />
        </main>
      </div>
    );
  }
}

export default App;
