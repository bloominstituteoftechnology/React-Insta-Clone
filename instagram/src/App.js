import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'

// Creating the overall app. This sets the state and creates the searchPostsHandler which matches and returns the filtered posts. IF there are no matches it returns all the posts. This only searches the username titles. 
class App extends Component {
  constructor() {
    super();
    this.state = {
      state: [],
    };
  }

  render() {
    return (
      <div className="App">
        <PostsPage/>
      </div>
    );
  }
}

          // If there are filtered posts then display those but otherwise set the state to all the posts.
export default Authenticate(App);
