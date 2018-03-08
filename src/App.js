import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }
  
  componentDidMount() {
    this.setState({ posts: dummyData });
    
  }
  
  render() {
    return (
    
      <div>
        <SearchBar />

        <div>
          {this.state.posts.map(post => {
            return (
              <PostContainer key={post.timestamp} postings={post} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
