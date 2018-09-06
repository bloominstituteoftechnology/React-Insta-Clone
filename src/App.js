import React from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

function App() {
  
  return (
    <PostsPage />
  );
  
}

export default Authenticate(App);
