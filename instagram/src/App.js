import React, { Component } from 'react';
import './App.css';
import posts from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      insta: [],
    };
  }

  componentDidMount() {
    this.setState( {insta: posts}) ;
  }

  render() {
    return (
      <div>
        <SearchBar posts= {this.state.insta} />
        <PostContainer posts= {this.state.insta} />
      </div>
    );
  }
}

export default App;
