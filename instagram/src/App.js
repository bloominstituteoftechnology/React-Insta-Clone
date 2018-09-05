import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
//import Authenticate from './Authentication/Authenticate';

// import dummyData from './dummy-data';
// import PostsContainer from './components/PostsContainer/PostsContainer';
// import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = [];
  }

  logIn = e => {

  }
 
  render() {
    return (
      <div className="App">
      
       <PostsPage />
      
      </div>
    );
  }
}

export default App;
