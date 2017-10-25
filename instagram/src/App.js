import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { postData } from './application-data.js';
import PostList from './PostList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    this.setState({postData});
  }

  render() {
    return (
      <div className="App">
        <PostList postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
