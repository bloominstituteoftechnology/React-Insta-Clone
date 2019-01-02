import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

const App = props => {
  return(<PostPage />)
}

export default Authenticate(App);
