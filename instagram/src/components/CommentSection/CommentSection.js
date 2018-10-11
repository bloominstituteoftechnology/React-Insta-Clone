import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import instaheart from './Images/instaheart.png';
import comment from './Images/comment.png';

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
          src={instaheart}
          alt="heart"
          onClick={this.incrementLikes}
          className="heart"
        />
        <img src={comment} alt="comment bubble" className="comment-balloon" />
        <div className="like-counter">{this.state.likes} likes</div>
        <div>
          {this.state.comments.map((c, i) => (
            <Comment key={i} comment={c} />
          ))}
          <CommentInput
            newComment={this.state.newComment}
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
