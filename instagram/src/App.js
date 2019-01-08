import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

const App = props => {
  return(
    <Route exact path="/" component={PostPage} />
    )
}

export default Authenticate(App);
