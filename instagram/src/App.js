import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';

const commentArray = dummyData.map(postObject => {
  return postObject['comments'];
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostContainer />
      </div>
    );
  }
}

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      comment: commentArray
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((postObject, index) => {
          const {username, thumbnailUrl, imageUrl, likes, timestamp} = postObject;
          return (
            <div className="post-container">
              <User username={username} thumbnailUrl={thumbnailUrl} />
              <img src={ imageUrl } alt={ username } />
              <ActionButton />
              <p>{ likes }</p>
              <CommentSection comment={this.state.comment} index={index} />
              <p>{ timestamp }</p>
              <CommentInput />
            </div>
          )
        })}
      </div>
    )
  }
}

const User = props => {
  const {username, thumbnailUrl} = props;
  return (
    <div className="user">
      <img src={ thumbnailUrl } alt={ username } />
      <p>{ username }</p>
    </div>
  )
}

const ActionButton = () => {
  return (
    <div className="action-buttons">
      <span>heart icon</span>
      <span>comment icon</span>
    </div>
  )
}


const CommentSection = props => {
  return (
    <div className="comment-section">
       { props.comment[props.index].map(commentObject => {
         return (
          <div className="comment">
              <p>{ commentObject['username'] }</p>
              <p>{ commentObject['text'] }</p>
          </div>
        )
       }) }
    </div>
  );
}

const CommentInput = () => {
  return (
    <div className="comment-input">
      <input type="text" placeholder="Add a comment"/>
      <span>...</span>
    </div>
  )
}

export default App;