import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'

import './App.css';
import dummyData from './dummy-data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {

    let posts = null;
    if (this.state.posts) {
      posts = this.state.posts.map((post) => {
        return (
          <PostContainer key={post.thumbnailUrl} post={post} />
        );
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {posts}
      </div>
    );
  }
}

export default App;
