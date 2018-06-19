import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/Post';
import SearchBar from './components/SearchBar/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(user => {
          return <PostContainer userData = {user} />
        })}
      </div>
    );
  }
}

export default App;
