import React, { Component } from 'react';
import Comment from '../CommentSection/Comment'
import PropTypes from 'prop-types'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    return (
      <div className="comments">
        {this.props.commentsArr.map( (comments,index) => <Comment key={index} comments={comments}/>)}
      </div>
     )
  }
}

CommentSection.propTypes = {
  commentsArr:PropTypes.array
}
export default CommentSection