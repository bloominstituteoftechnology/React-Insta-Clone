import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

function App() {
  
  return (
    <div className="App">
    <Authenticate  />
    <PostsPage />
        
    </div>
    );
  
}

export default Authenticate(App);
