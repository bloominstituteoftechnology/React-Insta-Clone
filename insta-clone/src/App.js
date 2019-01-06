import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './Components/SearchBar/SearchBar';
import Post from './Components/PostContainer/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my Instagram Clone App</h1>
        <SearchBar />
        <div>
          <Post {...this.state}/>
        </div>
      </div>
    );
  }
}

export default App;

// <div className="card">
//   {posts.map((post, i) => {
//     return (
//       <div className="postItem" key={i}>
//         <Post postProp={posts} />
//         <Comments commentProp={posts} />
//       </div>
//     )
//   })}
// </div>
