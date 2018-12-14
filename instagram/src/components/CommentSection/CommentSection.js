import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      newComment: ""
    }    
  }

  componentDidMount(){
    this.setState({comments: this.props.comments})
  }
  addNewComment = (event, index) => {
    event.preventDefault();
    if (event.target.value.length > 0) {
      this.setState({newComment: event.target.value});
    }
  }
  render(){
    return (
      <div className="comments-con">
        <div className="comments-icons">
          <div className="comment-heart-icon comment-icon">
            <img src="https://i.imgur.com/CTQpSrK.png" alt="" />
          </div>
          <div className="comment-comment-icon comment-icon">
            <img src="https://i.imgur.com/fgPw8c3.png" alt="" />
          </div>
        </div>
        <div className="comments-likes">{this.props.likes} likes</div>
        <div className="comments-con">{this.props.comments.map(comment => (
          <div className="comments-comment">
            <div className="comments-username">{comment.username}</div>
            <div className="comments-text">{comment.text}</div>
          </div>
        ))}
        </div>
        <div className="timestamp">{this.props.timestamp}</div>
        <div className="comments-input">
          <input type="text" placeholder="Add a comment..."/>
        </div>
      </div>
    )
  }
  
}

CommentSection.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string
};

export default CommentSection;