import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

const App = props => {
  return (
    <PostsPage loggedInUsername={props.loggedInUsername} />
  );
}
export default App;
