import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './App.css';
//import dummyData from './data/dummy-data';
//import PostContainer from './components/PostContainer/PostContainer';
//import SearchBar from './components/SearchBar/SearchBar';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {

  // ******* NEED LOGIN FUNCTION THAT WILL BE INVOKED BY LOGIN.JS WHEN USER LOGS IN
  // set username to localStorage
  // force page to reload

  render() {
    return (
      <PostsPage />
    );
  }
}

export default Authenticate(App);
