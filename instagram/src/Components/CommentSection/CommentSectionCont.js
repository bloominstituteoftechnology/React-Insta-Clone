import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import instaheart from './instaheart.png';
import comment from './comment.png';

import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: '',
      likes: 0
    };
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { text: this.state.newComment, username: 'MackDaddy' }
      ],
      newComment: ''
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  incrementLikes = event => {
    event.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <div className="comment-like">
        <img
          onClick={this.incrementLikes}
          className="heart"
          src={instaheart}
          alt="heart"
        />
        <img className="comment-balloon" src={comment} alt="bubble" />

        <div className="like-counter" alt="bubble">
          {this.state.likes} likes
        </div>

        <div>
          {this.state.comments.map((c, i) => (
            <Comment key={i} comment={c} />
          ))}
          <CommentInput
            addNewComment={this.addNewComment}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
