import React, { Component } from 'react';
import Comment from '../CommentSection/Comment';
import PostInteraction from '../PostInteraction/PostInteraction';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CommentSection/commentsection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ''
    };
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { text: this.state.newComment, username: 'Brandon' }
      ],
      newComment: ''
    });
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { likes } = this.props;
    return (
      <div className="commentSection">
        <PostInteraction likes={likes} />
        {this.state.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
        <form onSubmit={event => this.addNewComment(event)}>
          <input
            type="text"
            className="commentAdd"
            placeholder="Add a Comment..."
            onChange={this.onChangeHandler}
            name="newComment"
            value={this.state.newComment}
            autoComplete="off"
          />
          <FontAwesomeIcon icon="ellipsis-h" className="tripleDot" />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: propTypes.array.isRequired
};

export default CommentSection;
