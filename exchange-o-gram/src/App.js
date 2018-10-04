import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        {dummyData.map((post)=>{
          return(
            <div key={post.timestamp} className="containers">
              <PostContainer post={post}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
