import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPost: 0
    };
    this.nextPost = this.nextPost.bind(this);
  }

  nextPost() {
    const newPost = ((this.state.currentPost + 1) % postData.length);
    this.setState({
      currentPost: newPost
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <PostContainer postData={postData[this.state.currentPost]} />
        <Button className="next-page" onClick={this.nextPost}>Next Page</Button>
      </div>
    );
  }
}

export default App;
