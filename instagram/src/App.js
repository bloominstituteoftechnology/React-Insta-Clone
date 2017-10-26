import React, { Component } from 'react';

import './App.css';

import  postData  from './application-data.js';
import PostContainer from './PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }

componentDidMount() {
  this.setState({postData});
}

  render() {
    return (
      <div className="App">
        <PostContainer postData = {this.state.postData}/>
      </div>
    );
  }
}

export default App;
