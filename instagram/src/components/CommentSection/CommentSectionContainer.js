import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';
import CommentForm from './CommentForm';
import './Comments.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: props.timestamp,
      comments: props.comments,
      newComment: '',
    };
  }

  commentHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  addNewComment = (event) => {
    event.preventDefault();

    const comments = this.state.comments.slice();
    if (this.state.newComment !== '') {
      comments.push({
        username: 'jajawockee',
        text: this.state.newComment
      })
    }

    this.setState({ comments, newComment: '' });
  };

  render() {
    return (
      <div className="Comment-container">
        {this.state.comments.map((comment, i) =>
          <div key={i}>
            <Comment comment={comment} />
          </div>
        )}

        <p className="time">{moment(this.state.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>

        <CommentForm
          addNewComment={this.addNewComment}
          inputComment={this.state.newComment}
          commentHandler={this.commentHandler}
          newComment={this.state.newComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
