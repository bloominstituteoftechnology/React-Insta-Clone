import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';
import Comment from './Comment';
import moment from 'moment';

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: ""
  };

  componentDidMount() {
    const id = this.props.post.imageUrl;
    if (window.localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(window.localStorage.getItem(id))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    window.localStorage.setItem(
      this.props.post.imageUrl,
      JSON.stringify(this.state.comments)
    );
  }

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'gabrielduquette' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments: comments, comment: '' });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        <div className="timestamp">
          {moment().startOf('day').fromNow(this.props.post.timestamp).toUpperCase()}
        </div>
        <form onSubmit={this.submitComment}>
          <input placeholder="Add a comment..."
                 type="text"
                 value={this.state.comment}
                 onChange={this.commentHandler}
          />
        </form>
      </div>
    );
  }
};

CommentSection.propTypes = {
  postData: PropTypes.shape({
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};

export default CommentSection;
