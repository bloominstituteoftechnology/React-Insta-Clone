import React, { Component } from 'react';
import moment from 'moment';
import Comment from './Comment'
import './CommentSection.css'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: '',
    }
  }

  handleInput = event => {
    if (event.key === 'Enter') {
      this.setState({
        comments: [...this.state.comments, {username: 'testname', text:this.state.comment, timestamp: new Date(Date.now())}],
        comment: '',
      })
    }
  }

  handleComment = event => {
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
            <input type='text' name='comment' placeholder='Add a comment...' onChange={this.handleComment} value={this.state.comment} onKeyPress={this.handleInput} />
          </React.Fragment>
      </div>

    )
  }
}

export default CommentSection;
