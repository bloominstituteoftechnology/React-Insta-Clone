import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import './components/SearchBar/SearchBar.css'
import CommentSection from './components/CommentSection/CommentSection';
import './components/CommentSection/CommentSection.css';
import PostContainer from './components/PostContainer/PostContainer';
import './components/PostContainer/PostContainer.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    };
  }

    componentDidMount() {
        this.setState({ Posts: dummyData });
      }

  unpackPosts = (unpackString) => {
   let unpackedPosts = this.state.Posts.filter(Post => Post.username.include(unpackString));
  this.setState({ Posts: unpackedPosts });
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
      <searchBar unpackPosts={this.unpackPosts } />
      {this.state.Posts.map(Post => <PostContainer Post={Post}></PostContainer>)}
      </div>
    );
  }
}

export default App;
