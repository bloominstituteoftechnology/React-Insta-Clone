import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() { 
    return ( 
      <div>
        <p>
          <span className="username">{this.props.comments.username}</span>
          <span className="text">{this.props.comments.text}</span>
        </p>
      </div>
     )
  }
}

Comment.propTypes = {
  comments:PropTypes.shape({
    username:PropTypes.string,
    text:PropTypes.string
  })
}
export default Comment;