import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';

const App = () => {
  return (
    <Authenticate app={PostsPage} />
  );
}
export default App;
