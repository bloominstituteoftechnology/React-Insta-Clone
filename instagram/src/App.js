import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
// import CommentSection from './components/CommentSection/CommentSection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer dummy = {this.state.posts} />
        {/* <CommentSection posts = {this.state.posts} /> */}
      </div>
    );
  }
}

export default App;
