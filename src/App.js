import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    if (!this.state.posts.length) {
      return (
        <div className="App">
          <h2>Loading ...</h2>
        </div>
      );
    }
 
    return (
      <div className="App">
          <SearchBar />
          {this.state.posts.map(post => <PostContainer key={post.timestamp} post={post} />)}
      </div>
    );
  }
}


export default App;
