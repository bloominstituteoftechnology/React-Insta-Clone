import React, { Component } from 'react';
import './App.css';
import postData from './application-data.js'
import PostContainer from './PostContainer.js'
import CommentSection from './CommentSection.js'

class App extends Component {
  constructor() {
    super()
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
        <header className="App-header">
          <h1 className="App-title">Instagram</h1>
        </header>
        <p className="App-intro">
        </p>
        <PostContainer postData={this.state.postData}/>
      </div>
    );
  }
}

export default App;
