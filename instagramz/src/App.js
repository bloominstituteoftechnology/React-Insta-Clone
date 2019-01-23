import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

import FilterTest from './FilterTest';
import PostPage from './components/PostContainer/PostsPage';



const contentStuff = dummyData;

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

export default App;
