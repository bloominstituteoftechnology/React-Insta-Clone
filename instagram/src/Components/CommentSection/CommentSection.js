import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';
import styled from 'styled-components';

const CommentWrapperInput = styled.input`
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: none;
  border-left: 0;
  border-right: 0;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
    text-align: left;
    font-size: 14px;
  }
`;

const Timestamp = styled.div`
  color: #ccc;
  font-size: 12px;
  margin: 15px 0;
`;

class CommentSection extends React.Component {
  state = {
    comments: this.props.post.comments,
    comment: '',
    username: localStorage.getItem('username')
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

  setComments = () => {
    window.localStorage.setItem(
      this.props.post.imageUrl,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  submitComment = event => {
    event.preventDefault();

    const nextComment = {
      text: this.state.comment,
      username: this.state.username
    };

    const comments = this.state.comments.slice();

    comments.push(nextComment);

    this.setState({ comments: comments, comment: '' });

    setTimeout(() => {
      this.setComments();
    }, 600);
  };

  deleteComment = event => {
    console.log('TODO: fill in some logic for this event method');
  };
  render() {
    return (
      <div className="comment-wrapper">
        {this.state.comments.map((comment, index) => (
          <Comment
            key={index}
            comment={comment}
            delComment={this.deleteComment}
          />
        ))}
        <Timestamp>
          {moment()
            .startOf('day')
            .fromNow(this.props.post.timestamp)
            .toUpperCase()}{' '}
          AGO
        </Timestamp>
        <form onSubmit={this.submitComment}>
          <CommentWrapperInput
            placeholder="Add a comment..."
            type="text"
            value={this.state.comment}
            onChange={this.commentHandler}
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array,
    timestamp: PropTypes.string
  })
};

export default CommentSection;
