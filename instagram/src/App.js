import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Post from "./Components/PostContainer/post";

//App renders the post component to the screen via mapping the dummy data and passing it into a post component
class App extends Component {
  render() {
    return (
      <div className="App">
        {dummyData.map(data => (
          <div key={data.username}>
            <Post post={data}/>
          </div>
        ))}
      </div>
    );
  }
}

export default App;