import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    constructor() {
      super();
      this.state = {
        posts: []
      }
    }

    componentDidMount() {
      this.setState({ posts: dummyData });
    }

    addNewComment = (event) => {

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <p className="App-post">
        <PostContainer posts={this.state.posts} />
        </p>
      </div>
    );
  }
}

export default App;
