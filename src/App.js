import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './Components/PostContainer';
import SearchBar from './Components/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="App-header">
        <SearchBar />
        <PostContainer />



      </div>

    );

  }

}

export default App;
