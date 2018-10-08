import React, { Component } from 'react';
import SearchBar from './components/SearchBar/search-bar'
import PostContainer from './components/PostContainer/post-container'
import './App.css';

class App extends Component {
 
  render() {
    return (
      
      <div className="App">
        
        <div className ='searchBarInput'><SearchBar />
      </div>
      <div className = 'mainContent'>
        <PostContainer />
      </div>
    </div>
    );
  }
}

export default App;
