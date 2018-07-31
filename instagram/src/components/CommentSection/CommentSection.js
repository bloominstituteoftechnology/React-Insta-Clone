import React from 'react';
import PropTypes from 'prop-types';
import CommentSectionHeader from './CommentSectionHeader';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  render () {
    return (
      <div>
        <CommentSectionHeader likes={this.props.likes} />
        {this.state.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        <form>
          <input placeholder="Add a comment..." />
        </form>
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
