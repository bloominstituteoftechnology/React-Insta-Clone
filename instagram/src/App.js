import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: Object.keys(dummyData).map( (key) => {
        return [dummyData[key]];
      })
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map( (e,i) =>{
          return <PostContainer className="Post" post={e[0]} key={i} />;
        })
        }
      </div>
    );
  }
}

export default App;
