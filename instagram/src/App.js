import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
// import SearchBar from './components/SearchBar/SearchBar';
// import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let posts = [].concat(this.state.posts);
    posts = posts.concat(dummyData);
    this.setState({ posts });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> </header>
        { this.state.posts.map((post, index) => {
          return <div key={index}>
            <PostContainer posts = { post } />
            </div>
        })}
        {/* <SearchBar /> */}
      </div>
    );
  }
}

export default App;
