import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Comment.css'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() { 
    return ( 
      <div className="comment">
        <strong>{this.props.comments.username}</strong> {this.props.comments.text}
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