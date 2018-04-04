import React from 'react';
import moment from 'moment';
import CommentSection from '../CommentSection/CommentSection.js';
import love from './love.png';
import comment from './comment.png';

export default class Post extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      newComment: ''
    };
  }

  handleChange = (e) => this.setState({ newComment: e.target.value })

  incrementLikes = (e) => this.setState({ likes: this.state.likes + 1 })

  timeSincePost() {
    return moment(this.props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();
  }

  addComment = (e) => {
    this.setState((previous) => {
      return { 
        comments: previous.comments.concat({
          username: "jcuffe",
          text: previous.newComment
        }),
        newComment: ''
      };
    });
  }

  render() {
    return (
      <div className="Post">
        <div className="Post__header">
          <img
            className="Post__avatar" 
            src={this.props.thumbnailUrl} 
            alt="User Avatar" />
          <h1 className="Post__username">
            {this.props.username}
          </h1>
        </div>
        <img
          className="Post__image"
          src={this.props.imageUrl}
          alt="Post Image" />
        <div className="Post__footer">
          <div className="Post__action-bar">
            <img src={love} alt="Love" onClick={this.incrementLikes} /> 
            <img src={comment} alt="Comment" />
          </div>
          <div className="Post__likes">
            {this.state.likes} likes
          </div>
          <CommentSection comments={this.state.comments} />
          <div className="Post__time-since-post">
            {this.timeSincePost()}
          </div>
          <div className="Post__inputs">
            <input 
              type="text" 
              value={this.state.newComment}
              onChange={this.handleChange}
              placeholder=" Add a comment..." />
            <button onClick={this.addComment}>Go!</button>
          </div>
        </div>
      </div>
    );
  }
}