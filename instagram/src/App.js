import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      instaPosts: dummyData
    }
  }
  render() {
    return (
      <div className="desktop">
        <SearchBar/>
        <div className="App">
          <PostContainer instaPost={this.state.instaPosts}/>
        </div>
      </div>
    );
  }
}

export default App;
