import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';
// import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {

    if (loggedIn === true) {

    
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts}/>
      </div>
    );
  }
  else {
    return <Authenticate />
  }
  }
}

export default App;
