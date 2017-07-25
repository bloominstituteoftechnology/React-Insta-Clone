import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {postData.map((data, i) => {
          return <PostContainer postData={data} />
        })}
      </div>
    );
  }
}

export default App;
