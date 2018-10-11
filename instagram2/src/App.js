import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
        <PostsPage />
      </div>
    );
  }
}

export default App;
//throws error when try to wrap App with Authenticate

//dont render authenticate component in app.
//want to replace app with authenticate version of app.
//has to be done outside app comp otherwise will create infinte loop. 
//index taking in app wrapped in authentic.  exporting app with added authenticate functionality.

