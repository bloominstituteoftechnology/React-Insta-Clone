import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/postContainer.js';
// import CommentSection from './components/commentSection/commentSection.js';
// import SearchBar from './components/searchBar/searchBar.js';

class App extends Component {
  constructor() {
    super();

    this.state= {
      posts: [],
      displayedPosts: []
    }

    this.filterPosts = this.filterPosts.bind(this);
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      displayedPosts: dummyData
    })
  }

  filterPosts() {
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2 className="App-title">Instagram</h2>
        </header>
        <div className="Posts">
          {this.state.displayedPosts.map((post, index) => {
            return (
              <PostContainer key={index} post={post}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
