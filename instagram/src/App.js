import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      searchText: ""
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.instaData.map(user => <PostContainer data={user} key={user.timestamp} />)}
      </div>
    );
  }
}

export default App;
