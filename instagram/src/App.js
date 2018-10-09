import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './Components/CommentSection'
import PostContainer from './Components/PostContainer'
import SearchBar from './Components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <CommentSection 
            
          />
          <PostContainer 

          />
          <SearchBar 

          />
          <p>
            Welcome to <a
            className="App-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Instagram</a>
          </p>
      </div>
    );
  }
}

export default App;
