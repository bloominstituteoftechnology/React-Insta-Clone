import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import { SearchBar } from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  // componentDidMount() {
  //   let posts = [].concat(this.state.posts);
  //   posts = posts.concat(dummyData);
  //   this.setState({ posts });
  // }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* { this.state.posts.map((post, index) => {
          return <div key={index}>
            <PostContainer posts = { post } />
            </div>
        })} */}
        <PostContainer post={ this.state.posts[0]} />
      </div>
    );
  }
}

export default App;
