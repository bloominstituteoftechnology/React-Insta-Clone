import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      inputText: '',
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      // console.log(this.state.dummyData),
      <div className="App">
        <SearchBar />
        {this.state.posts.map((post) => (
          <PostContainer post={post} key={post.timestamp} />
        ))}
      </div>
    );
  }
}

export default App;
