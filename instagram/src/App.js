import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import LoginPage from './components/Login/Login';

const App = props => {
  return(<PostPage />)
}

export default Authenticate(App);
