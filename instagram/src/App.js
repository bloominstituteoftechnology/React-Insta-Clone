import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';
import Moment from 'react-moment';

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
          console.log(timestamp)
          return (
            <div className="post-container">
              <User username={username} thumbnailUrl={thumbnailUrl} />
              <img src={ imageUrl } alt={ username } />
              <ActionButton />
              <p className="likes">{ likes } likes</p>
              <CommentSection comment={this.state.comment} index={index} />
              <Moment parse="MMM D YYYY" className="timestamp" fromNow AGO>{timestamp}</Moment>
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

User.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
}

const ActionButton = () => {
  return (
    <div className="action-buttons">
      <span className="icon"><i className="far fa-heart"></i></span>
      <span className="icon"><i className="far fa-comment"></i></span>
    </div>
  )
}

const CommentSection = props => {
  const {comment, index} = props;

  return (
    <div className="comment-section">
       { comment[index].map(commentObject => {
         const {username, text} = commentObject;

         return (
          <div className="comment">
              <p>{ username }</p>
              <p>{ text }</p>
          </div>
        )
       }) }
    </div>
  );
}

CommentSection.propTypes = {
  comment: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
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