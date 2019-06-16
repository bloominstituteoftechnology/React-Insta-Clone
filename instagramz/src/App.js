import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostsPage';

import authenticate from './Authentication/Authenticate';
import Login from './components/Login/Login';


class App extends Component {
  constructor() {
    super();

    this.state = {
        content: [],
        search: 'everything'
      }
    

  }


  render() {
    return (
      <div>
      <PostPage />
         
      </div>
    );
    
  }
}

dummyData.propTypes = {
  dummyData: PropTypes.array
};

export default authenticate(App)(Login);

