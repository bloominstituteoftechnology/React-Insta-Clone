import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './App.css';
import data from './dummy-data';

import SearchBar from'./components/SearchBar/SearchBar';
import PostContainer from'./components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      instaClonePosts: [],
    };
    this.setState({instaClonePosts: data});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Welcome to D2rd-O-Gram</h1>
          </p>
          <a
            className="App-link"
            href="https://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </header>
        <div>
          <SearchBar />
          <PostContainer />

        </div>
      </div>
    );
  }
}

export default App;
