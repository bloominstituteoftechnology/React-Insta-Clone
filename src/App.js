import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: dummyData
    }
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map( (data) => {
          // Pass each element to PostContainer:
            // username: "philzcoffee",
            // thumbnailUrl:
            // imageUrl:
            // likes: 400,
            // timestamp: "July 17th 2017, 12:42:40 pm",
            // comments: 
          return (
            <PostContainer 
              username={data.username}
              thumbnailUrl={data.thumbnailUrl}
              imageUrl={data.imageUrl}
              likes={data.likes}
              timestamp={data.timestamp}
              comments={data.comments}
            />
          );
        })}
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
