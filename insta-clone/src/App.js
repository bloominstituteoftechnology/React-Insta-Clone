import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => {
          return <PostContainer key={post.timestamp} data={post} incrementLikes={this.incrementLikes}/>
        })}
      </div>
    );
  }
}

export default App;
