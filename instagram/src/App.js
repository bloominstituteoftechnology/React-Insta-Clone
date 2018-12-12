import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostComponent/PostComponent';

class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <nav>
          <SearchBar />
        </nav>
        <div className="body-wrapper">
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
