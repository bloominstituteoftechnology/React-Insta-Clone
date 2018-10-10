import React from 'react';
import './App.css';
import Authenticate from './Authentication/Authenticate';
import Login from './components/Login/Login';
import PostPage from './components/PostContainer/PostPage';

const App = () => (
  <div className="App">
    <PostPage />
  </div>
);

const hocRender = Authenticate(App)(Login);

export default hocRender;
