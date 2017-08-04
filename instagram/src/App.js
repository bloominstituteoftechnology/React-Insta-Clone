import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import './App.css';

import postData from './application-data.js';
import  PostContainer  from './PostContainer.js';
import SearchBar from './SearchBar.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid fluid className="top-container">
          <SearchBar />
          <PostContainer posts={postData}/>
        </Grid>  
      </div>
    );
  }
}

export default App;
