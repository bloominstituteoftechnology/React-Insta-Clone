import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';

class App extends React.Component {
  render() {
    return <PostPage />;
  }
}

export default Authenticate(App);