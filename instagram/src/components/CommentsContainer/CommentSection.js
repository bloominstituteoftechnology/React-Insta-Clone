import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection';

class CommentSection extends React.Component {

  render() {
    return (
      <div className = 'CommentInfo'>
        <span>{this.props.username}</span>
        {this.props.text}
      </div>

    );

  }
}

Comment.propTypes = {
  username: PropTypes.string.isRequired
};

export default CommentSection