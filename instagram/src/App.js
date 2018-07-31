import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor () {
    super();
    this.state = {
      instaData: [],
    }
  }

  componentDidMount () {
    this.setState({instaData: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer comments={this.state.instaData} />
      </div>
    );
  }
}

export default App;
