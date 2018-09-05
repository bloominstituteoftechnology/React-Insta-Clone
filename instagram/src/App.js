import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css';
import './components/CommentSection/CommentSection.css';
import PostsPage from './components/PostContainer/PostsPage';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authentication'


const App = () => 
  <div>
    <PostsPage/>
  </div>



export default Authenticate(App);
