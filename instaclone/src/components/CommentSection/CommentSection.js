import React from 'react';
import moment from 'moment';
import './CommentSection.css';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: ''
    }
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState({ 
        comments: [...this.state.comments, {username: 'dummy', text: this.state.comment, timestamp: new Date(Date.now())}],
        comment: ''
       })
    }
  }
  onCommentChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <React.Fragment>
        {this.state.comments.map((comment,i) => <Comment comment={comment} key={i} />)}
        <p className="moment">{moment(`${this.state.comments[this.state.comments.length - 1].timestamp}`).fromNow()}</p>
        <input type="text" name="comment" placeholder="Add a comment" onChange={this.onCommentChange} value={this.state.comment} onKeyPress={this.handleKeyPress}/>
      </React.Fragment>
    )
  }
}

export default CommentSection;