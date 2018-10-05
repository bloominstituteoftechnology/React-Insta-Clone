import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
  render() {
    return (
      <div className="singleComment">
        <span>{this.props.username} </span>
        {this.props.text}
      </div>
    );
  }
}

Comment.propTypes = {
  username: PropTypes.string.isRequired
};

export default Comment;
