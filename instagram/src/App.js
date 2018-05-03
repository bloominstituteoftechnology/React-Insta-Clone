import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/postcontainer/postcontainer';
import SearchBar from './components/searchbar/searchbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;
