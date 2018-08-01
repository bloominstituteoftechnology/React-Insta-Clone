import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return
      <div className="App">
        <PostsPage posts={props.posts} searchItemHandler={props.searchItemHandler} searchInfo={props.searchInfo} searchSubmitHandler={props.searchSubmitHandler} />
      </div>
  }
}

export default App;
