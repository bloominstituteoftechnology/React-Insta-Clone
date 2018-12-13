import React, { Component } from 'react';
import './App.css';
import dummyData from './data/dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
            <div className = "search_bar">
                <SearchBar />
            </div>
        </header>

        <div className ="content">

          <PostContainer User ={this.state.posts}/>

        </div>

      </div>
    );
  }
}

export default App;
