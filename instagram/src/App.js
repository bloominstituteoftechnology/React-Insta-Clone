import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar /> {/*Inserted search bar component*/}
        {dummyData.map((post) => { {/*Mapping over each post object in dummy data and ...*/}
            return <PostContainer username={post.username} thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} likes={post.likes} timestamp={post.timestamp} comments={post.comments}/>; {/*Creating a PostContainer component that passes each value to PostContainer as props*/}
        })} {/*end post creation map*/}
      </div>
    );
  }
}

export default App;