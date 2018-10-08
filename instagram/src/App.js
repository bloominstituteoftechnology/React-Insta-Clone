import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import {dummyData} from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {dummyData}
      };
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Start of Instagram Clone</h1>
        </header>
        <SearchBar/>
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
