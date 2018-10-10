import React, { Component } from 'react';
import moment from 'moment';
import Comment from './Comment'
import CommentEntry from './CommentEntry'
import Timestamp from './Timestamp'
import './CommentSection.css'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: '',
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
    console.log(this.props.timestamp)
    return (
      <div className='comment-section'>
            {this.state.comments.map((comment, i) =>
              <Comment key={i} comment={comment} />
            )}
            <Timestamp timestamp={this.props.timestamp} />
            <CommentEntry addNewComment={this.addNewComment} handleCommentChange={this.handleCommentChange} newComment={this.state.newComment} />
      </div>

    )
  }
}

// PostContainer.propTypes = {
//   post: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     likes: PropTypes.number.isRequired,
//     timestamp: PropTypes.string.isRequired,
//     comments: PropTypes.array.isRequired
//   })
// };

export default CommentSection;
