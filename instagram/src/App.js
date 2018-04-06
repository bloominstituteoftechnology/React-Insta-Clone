import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
    }
  }

  componentDidMount() {
    this.setState({
      allPosts: dummyData
    })
  }

  render() {
    return <div className="App">
        <SearchBar />
        {this.state.allPosts.map((post, index) => (
          <PostContainer
            post={post}
            key={`${post.username}'s post `}
            className="postContainerDiv"
          />
        ))}
      </div>;
  }
}

export default App;
