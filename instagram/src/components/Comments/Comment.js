import React from 'react';
import PropTypes from 'prop-types';
import { SingleComment } from './../Styled/styled';

class Comment extends React.Component {
  render() {
    return (
      <SingleComment>
        <span>{this.props.username} </span>
        {this.props.text}
      </SingleComment>
    );
  }
}

Comment.propTypes = {
  username: PropTypes.string.isRequired
};

export default Comment;
