import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

let initialComments;
localStorage.getItem('comments') ? initialComments = JSON.parse(localStorage.getItem('comments')) : initialComments = [];

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: (initialComments.length > 0 ? initialComments : this.props.comments),
      comment: ''
    }
  }
  addNewComment = e => {
    let newComments = [...this.state.comments, {username: 'dummy', text: this.state.comment}]
    if (e.key === 'Enter') {
      this.setState({ 
        comments: newComments,
        comment: ''
       })
    }
    localStorage.setItem('comments', JSON.stringify(newComments));
  }
  deleteComment = e => {
    let filteredComments = this.state.comments.filter(comment => e.target.parentNode.textContent.indexOf(comment.text) === -1);
    this.setState({ comments: filteredComments });
    localStorage.setItem('comments', JSON.stringify(filteredComments));
  }
  onCommentChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <React.Fragment>
        {this.state.comments.map((comment,i) => <Comment comment={comment} key={i} deleteComment={this.deleteComment}/>)}
        <input type="text" 
          id= "commentInput"
          name="comment"
          placeholder="Add a comment..."
          onChange={this.onCommentChange}
          value={this.state.comment}
          onKeyPress={this.addNewComment}/>
      </React.Fragment>
    )
  }
}

export default CommentSection;