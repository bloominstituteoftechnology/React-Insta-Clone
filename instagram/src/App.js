import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';



class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <div className="SearchBarWrapper">
          <SearchBar />
        </div>
        <div className="PostContainerWrapper">
          <PostContainer />
        </div>
      </div>
    );
  }
}
export default App;
