import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    setTimeout(() => {
      this.setState=({posts: dummyData})
    }, 30000);
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
