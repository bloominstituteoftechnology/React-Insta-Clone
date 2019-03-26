import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  render() {
    console.log({dummyData});
    return (
      <div className="App">
        <SearchBar />

        {dummyData.map(post => (
          <PostContainer 
            key={post.id} 
            imageUrl={post.imageUrl} 
            likes={post.likes} 
            comments={post.comments} 
            thumbnailUrl={post.thumbnailUrl} 
            username={post.username} 
          />
        ))}

      </div>
    );
  }
}

export default App;
