import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
      likes: 0
    };
  }
  componentDidMount() {
    this.setState({ comments: [...props.comments] });
  }

  render() {
    return (
      <div>
        <Comment comment={this.state.comment} />
      </div>
    );
  }
}

export default CommentSection;

// CommentSection.propTypes = {
//   post: PropTypes.shape({
//     comments: PropTypes.string
//   })
// };
