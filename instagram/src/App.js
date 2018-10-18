import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      instaData: dummyData, 
    }
  }


  render() {
    return (
      <div className="App">
        <SearchBar instaData = {this.state.instaData} />
        <PostContainer instaData = {this.state.instaData} />
      </div>
    );
  }
}

export default App;
