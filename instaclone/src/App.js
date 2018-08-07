import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/postcontainer/postcontainer.js';
import SearchBar from './components/searchbar/searchbar.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  componentDidMount() {
    this.setState({ posts:dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        {this.state.dummydata.map(post => <PostContainer key={this.timestamp} values={post} />)} />
      </div>
    );
  }
}

export default App;
