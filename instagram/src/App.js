import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import CommentSection from './components/PostContainer/postContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <SearchBar />
        </div>
        
      </div>
    );
  }
}

export default App;
