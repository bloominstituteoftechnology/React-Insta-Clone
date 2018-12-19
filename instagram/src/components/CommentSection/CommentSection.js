import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import Comment from './Comment';

class CommentSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      likes: this.props.likes
    }    
  }

  componentDidMount(){
    this.setState({comments: this.props.comments});
  }

  handleNewComment = (event) => {
    this.setState({newComment: event.target.value});
  }

  onCommentAdd = (event) => {
    event.preventDefault();
    const newComments = this.state.comments.slice();
    console.log(this.state.comments)
    console.log(newComments)
    newComments.push({username: "christene", text: this.state.newComment});
    this.setState({
        comments: newComments, 
        newComment: ""
      }, () => console.log(this.state.comments, this.state.newComment))
  }

  onCommentLike = (event) => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }

  render(){
    return (
      <div className="comments-con">
        <div className="comments-icons">
          <div className="comment-heart-icon comment-icon" onClick={this.onCommentLike}>
            <i className="far fa-heart"></i>
          </div>
          <div className="comment-comment-icon comment-icon">
            <i className="far fa-comment"></i>
          </div>
        </div>
        <div className="comments-likes">{this.state.likes} likes</div>
        <div className="comments-con">{this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        </div>
        
        <div className="timestamp">{this.props.timestamp}</div>

        <div className="comments-input">
          <CommentInput  handleNewComment={this.handleNewComment} newComment={this.newComment} onCommentAdd={this.onCommentAdd}/>
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