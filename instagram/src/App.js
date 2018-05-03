import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Insta-Clone</h1>
        </header>
        <SearchBar />
        <div className="post-wrapper">
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
