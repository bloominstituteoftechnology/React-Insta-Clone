import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection';

class CommentSection extends React.Component {

  render() {
    return (
      <div className = 'commentInfo'>
        <span className = 'userName'>{this.props.username}</span>
        {this.props.text}
      </div>

    );

  }
}

CommentSection.propTypes = {
  username: PropTypes.string.isRequired
};

export default CommentSection