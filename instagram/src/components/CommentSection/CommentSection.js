import React, { Component } from 'react';
import moment from 'moment';
import Comment from './Comment'
import CommentEntry from './CommentEntry'
import './CommentSection.css'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: '',
      timestamp: props.timestamp,
    }
  }



  addNewComment = event => {
    event.preventDefault();
    if (this.state.newComment.length > 0) {
      this.setState({
        comments: [...this.state.comments, {
          username: 'testname',
          text:this.state.newComment,
          }],
        newComment: '',
      })
    }
  }


  handleCommentChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div className='comment-section'>
          <React.Fragment>
            {this.state.comments.map((comment, i) =>
              <Comment key={i} comment={comment} />
            )}
            <p className='moment'>{moment(`${this.state.comments[this.state.comments.length-1].timestamp}`).fromNow()}</p>
            <CommentEntry addNewComment={this.addNewComment} handleCommentChange={this.handleCommentChange} newComment={this.state.newComment} />
          </React.Fragment>
      </div>

    )
  }
}

export default CommentSection;
