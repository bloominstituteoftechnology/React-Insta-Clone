import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './Components/SearchBar/SearchBar';
import Post from './Components/PostContainer/Post';
import Comments from './Components/CommentSection/Comments';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }
  
  componentDidMount() {
    const postInfo = dummyData
    this.setState ({
      posts: postInfo
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <p>hello!</p>
        <SearchBar />
        <div className="card">
        {/* map function here- each post should have all 3 components */}
          {posts.map((post, i) => {
            return (
              <div className="postItem" key={i}>
                {post.username}
                <Post />
                <Comments commentProp={post.comments}/>
              </div>
            )
          })}  
        </div>
      </div>
    );
  }
}

export default App;
