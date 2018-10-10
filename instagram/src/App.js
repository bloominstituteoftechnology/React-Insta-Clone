import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
// import SearchBar from './components/SearchBar/search-bar'
// import PostsContainer from './components/PostContainer/post-container'

// import dummyData from './dummyData'
//import CommentSection from './components/CommentSection/comment-section';


 class App extends Component {
   
  render() {
    return (
      <PostsPage />
    );
  }
}
 export default Authenticate(App);