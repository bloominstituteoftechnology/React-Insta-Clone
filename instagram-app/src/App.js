import React, {Component, useState} from 'react';
import logo from './logo.svg';
import Data from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {

  constructor () {
    super(props);

    this.state = {
      posts: Data,
      comment: [],
      username: //Current user object
    }
  }

  addComment(username) {
    this.state.posts.map(post => {
      if (username === post.username) {
        const newComment = {
          username: this.state.username,
          text: this.state.comment
        };
    
        this.setState({
          comment: newComment,
          posts: this.state.posts['comments'].concat(comment),
        })
      }
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         <PostContainer
           posts={this.state.posts}
           commentChange={}
           addComment={this.addComment()}
           />
        </header>
      </div>
    );

  }
}

export default App;
