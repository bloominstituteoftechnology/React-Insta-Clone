import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import postData from './application-data.js';
import PostContainer from './PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appData: []
    }
  }
  componentDidMount() {
    this.setState({appData: postData});
  }
  render() {
    return (
      <div className="App">
        <PostContainer appData={this.state.appData}/>
      </div>
    );
  }
}

export default App;
