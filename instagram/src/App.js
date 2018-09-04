import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postInfo: []
    };
  }

  componentDidMount() {
    this.mapData();
  }

  mapData() {
    this.setState({ postInfo: [...dummyData] });
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer 
          posts = {this.state.postInfo} 
        />
      </div>
    );
  }
}

export default App;