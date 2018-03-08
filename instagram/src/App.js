import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { SearchBar } from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    };
  }

  componentDidMount() {
    this.setState({Posts: dummyData});
  }

  render() {
    return (
      <div>
          <SearchBar />
          <PostContainer posts={this.state.Posts} />
      </div>
    );
  }
}

export default App;
