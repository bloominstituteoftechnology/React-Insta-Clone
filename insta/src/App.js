import React, { Component } from 'react';
import './App.css';
import Data from '../../dummy-data'
import SearchBar from "./components/SearchBar/searchBar";
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={Data} />
      </div>
    );
  }
}

export default App;
