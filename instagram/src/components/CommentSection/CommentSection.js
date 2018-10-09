import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';
import CommentInput from './CommentInput';
import moment from 'moment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      username: 'hardlyreal',
      commentText: ''
    };
  }

  addNewComment = e => {
    e.preventDefault();

    const comment = {
      username: this.state.username,
      text: this.state.commentText
    };

    const comments = [...this.state.comments, comment];

    this.setState({ comments: comments, commentText: '' });
  };

  updateText = e => {
    this.setState({ commentText: e.target.value });
  };

  render() {
    return (
      <div className="CommentSection">
        {this.state.comments.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
        <div className="TimeStamp">
          {moment()
            .startOf('day')
            .fromNow()}
        </div>
        <CommentInput
          addNewComment={this.addNewComment}
          commentText={this.commentText}
          updateText={this.updateText}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
