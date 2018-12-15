import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import Comment from './Comment';

class CommentSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ""
    }    
  }

  componentDidMount(){
    this.setState({comments: this.props.comments})
  }

  handleNewComment = (event) => {
    if (event.target.value > 0){
      this.setState({newComment: event.target.value})
    }
    console.log(this.state.newComment);
  }
  
  addNewComment = (event, i) => {
    event.preventDefault();
    console.log(this.state.newComment)
    
  }

  

  render(){
    return (
      <div className="comments-con">
        <div className="comments-icons">
          <div className="comment-heart-icon comment-icon">
            <i className="far fa-heart"></i>
          </div>
          <div className="comment-comment-icon comment-icon">
            <i className="far fa-comment"></i>
          </div>
        </div>
        <div className="comments-likes">{this.props.likes} likes</div>
        <div className="comments-con">{this.props.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        </div>
        <div className="timestamp">{this.props.timestamp}</div>
        <div className="comments-input">
          <CommentInput  handleNewComment={this.props.handleNewComment} newComment={this.props.newComment} addNewComment={this.props.addNewComment}/>
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