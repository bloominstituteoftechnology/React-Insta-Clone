import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <SearchBar />
        <PostContainer />
      </section>
    );
  }
}

export default App;
